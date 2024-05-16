import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import {React, useState} from 'react'
import { useLocalSearchParams, Stack } from 'expo-router'
import images from '../../../../constants/images';
import styles from '../../../../styles/dataPost';
import icons from '../../../../constants/icons';
import ImageModal from '../../../../components/imageModal';

const DataPost = ({params}) => {
  let currentPost = useLocalSearchParams();
  //console.log(currentPost);

  const typePost = 'SE BUSCA';
  const statusPost = '';
  const name = 'MANCHITAS';
  const imagesPost = [images.img_default_1, images.img_default_2, images.img_default_2, images.img_default_2];
  const postDescription = 'Mi perro se perdió anoche en la madrugada. Nos dejamos la puerta abierta del recinto y esta mañana no estaba. Estamos muy preocupados ya que es muy travieso y debió haberse ido a perseguir algún gato. ¡Agradecemos difusión!';
  const specie = 'PERRO';
  const race = 'COCKER SPANIEL';
  const genre = 'MACHO';
  const dateAdd = '12/03/2023';
  const petDescription = 'Muy travieso, de unos 2 años de edad.';
  const location = 'Calle Pruebas, Pruebalandia, 03330, Alicante';
  const profileImage = images.img_default_4;
  const author = 'Miriam Ramirez';
  const username = 'miriamramirez13';
  const email = 'miriamcontact9@gmail.com';
  const phone = '986 45 45 34';

  let colorTypePost = '#E44040';
  if(typePost == 'ENCONTRADO'){
    colorTypePost = '#DBA10C';
  }
  else if(typePost == 'BUSCANDO PAREJA'){
    colorTypePost = '#DE58A0'
  }
  else if(typePost == 'ADÓPTAME'){
    colorTypePost = '#4082E4';
  }

  // Variables para el modal
  const [modalVisible, setModalVisible] = useState (false);
  const [selectedImage, setSelectedImage] = useState (null);

  const pressedImageController = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };
  //////////////////////////

  return (
    <SafeAreaView style = {{ width: '100%', height: '100%' }} >
        <Stack.Screen options={{    
            headerTitle: "ATRÁS", 
            headerRight: () => (
                <View style = {{ width: 200, backgroundColor: colorTypePost, alignItems: 'center'}}>
                    <Text style = {{ fontFamily: 'Inter-Black', fontSize: 16, color: '#fff' }}>{typePost}</Text>
                </View>
            ) }} 
        />
        <ScrollView style = {{ flex: 1, marginHorizontal: 10 }}>
            <ScrollView horizontal>
                {imagesPost.map((image, index) => (
                    <TouchableOpacity key = { index } onPress = {() => pressedImageController(image)}>
                        <Image key = { index } source = { image } style = { styles.imagePost } />
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <Text style = { styles.petName }>{name}</Text>
            <Text style = { styles.longText }>{postDescription}</Text>
            <View style = { styles.dividerLine } />
            <View>
                <View style = { styles.containerProperty1 }>
                    <View style = { styles.containerTitleProperty }><Text style = { styles.titleProperty }>ESPECIE:</Text><Text>{specie}</Text></View>
                    <View style = { styles.containerTitleProperty }><Text style = { styles.titleProperty }>GÉNERO:</Text><Text>{genre}</Text></View>
                </View>
                <View  style = { styles.containerProperty1 }>
                    <View style = { styles.containerTitleProperty }><Text style = { styles.titleProperty }>RAZA:</Text><Text>{race}</Text></View>
                    <View style = {{ borderWidth: 1, borderColor: 'black', borderRadius: 15, paddingHorizontal: 35, paddingVertical: 10 }}><Text>{dateAdd}</Text></View>
                </View>
            </View>
            <View style = {{ marginBottom: 10 }}>
                <Text style = { styles.titleProperty }>DESCRIPCIÓN:</Text>
                <Text style = { styles.longText }>{petDescription}</Text>
            </View>
            <View style = {{ marginBottom: 10 }}>
                <Text style = { styles.titleProperty }>UBICACIÓN:</Text>
                <Text style = { styles.longText }>{location}</Text>
            </View>
            <View style = { styles.dividerLine } />
            <View style = {{ flexDirection: 'row', marginBottom: 12 }}>
                <Image 
                    source = { profileImage }
                    style = { styles.profileImage }
                />
                <View>
                    <Text style = {{ fontFamily: 'Inter-Black', fontSize: 17, marginTop: 5 }}>
                        {author}
                    </Text>
                    <Text style = {{ fontFamily: 'Inter-Regular', fontSize: 15, color: 'gray' }}>
                        @{username}
                    </Text>
                </View>
            </View>
            <View style = { styles.contactContainer }>
                <View style = {{ flexDirection: 'row'}}>
                    <Image source = { icons.email } style = { styles.contactIcons }/>
                    <Text>{email}</Text>
                </View>
                <View style = {{ flexDirection: 'row'}}>
                    <Image source = { icons.phone } style = { styles.contactIcons }/>
                    <Text>{phone}</Text>
                </View>
            </View>
            <View style = { styles.footerButtons }>
                <TouchableOpacity style = { [styles.footerButton, { borderRightColor: 'black', borderRightWidth: 0.5 }] }>
                    <Image source = { icons.compartir } style = { styles.contactIcons }/>
                    <Text>Compartir Post</Text>
                </TouchableOpacity>
                <TouchableOpacity style = { [styles.footerButton, { borderLeftColor: 'black', borderLeftWidth: 0.5 }] }>
                    <Image source = { icons.prohibido } style = { styles.contactIcons }/>
                    <Text>Reportar Post</Text>
                </TouchableOpacity>
            </View>
            {selectedImage && (
                <ImageModal image = { selectedImage } visible = { modalVisible } closeImageModal = { closeModal } />
            )}
        </ScrollView>
    </SafeAreaView>
  )
}

export default DataPost