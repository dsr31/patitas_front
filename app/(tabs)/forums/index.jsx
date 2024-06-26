import { TouchableOpacity, Image, ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState, useEffect,useCallback } from 'react'
import 'react-native-reanimated';
import { router,Link,Redirect,useFocusEffect } from 'expo-router';
import images from '../../../constants/images';
import styles from '../../../styles/tabs';
import icons from '../../../constants/icons';
import ForumCard from '../../../components/forumCard';

const Forums = () => {

  //Conexion base de datos
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(() => {
    fetch('http://192.168.231.18:4000/api/forums').then(
      res => res.json()
    ).then(
      (resultado) => {
        setLoading(false);
        setData(resultado.body);
      }, 
      (error) => {
        setLoading(true);
        console.warn("Houston tenemos un problema en tablon de foros");
      }
    )
  }, [])

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [fetchData])
  );

  return (
    <>
      <SafeAreaView style = { styles.container }>
        <View style = { styles.header }>
          <Image
            source = { images.logov3 }
            style  = { styles.logoHeader }
          />        
          <View style={styles.spacer} />
          {/*<Image 
            source = { icons.filter }
            style  = { styles.iconHeader } 
          />*/}
        </View>
        <View style = { styles.titlePageSection }>
          <View style = { [ styles.lineSection, styles.lineSectionL ] }/>
          <Text style = { styles.titlePage } >FORO</Text>
          <View style = { [ styles.lineSection, styles.lineSectionR ]}/>
        </View>
        <View style = { styles.feed }>
          <View style = {{ marginTop: 50 }} />
          <View style = {{ height: '100%', backgroundColor: '#E2D8BE'}}>
            <FlatList
              /*data = {[
                {
                  id: 1, 
                  title: '¿Cómo saber la edad de mi gato? efrgtfh efsrgdfhgjm errfsgdtfh efrgdhn dsfgrh fergdhn fsrgdhn fsrgdhbn frgdhn ', 
                  photo: images.img_default_2, 
                  description: 'Ando to rallao porque adopté a este gato callejero y la verdad que no sé diferenciar en qué fase de su ciclo de vida se encuentra. Habia una vez un cuento que alegraba siempre el corazón', 
                  author: 'María de la O',
                  username: 'mariadelao_',
                },
                {
                  id: 2, 
                  title: '¿Alguien sabe de conejos?', 
                  photo: images.img_default_2, 
                  description: 'Está haciendo más caca de lo normal, ¿alguien sabe algo?', 
                  author: 'JuanMalkijuhygtfrdectfvgybhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
                  username: 'eljuanitomandarinomolamuchokoijuygtyfrdekjh',
                },
                {
                  id: 3, 
                  title: '¿Alguien sabe de conejos?', 
                  photo: images.img_default_2, 
                  description: 'Está haciendo más caca de lo normal, ¿alguien sabe algo?', 
                  author: 'JuanMalkijuhygtfrdectfvgybhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
                  username: 'eljuanitomandarinomolamuchokoijuygtyfrdekjh',
                },
                {
                  id: 4, 
                  title: '¿Alguien sabe de conejos?', 
                  photo: images.img_default_2, 
                  description: 'Está haciendo más caca de lo normal, ¿alguien sabe algo?', 
                  author: 'JuanMalkijuhygtfrdectfvgybhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
                  username: 'eljuanitomandarinomolamuchokoijuygtyfrdekjh',
                },
                {
                  id: 5, 
                  title: '¿Alguien sabe de conejos?', 
                  photo: images.img_default_2, 
                  description: 'Está haciendo más caca de lo normal, ¿alguien sabe algo?', 
                  author: 'a',
                  username: 'a',
                },
                {
                  id: 6, 
                  title: '¿Alguien sabe de conejos?', 
                  photo: '', 
                  description: 'En este código, la condición {photo !== && ...} asegura que el componente <Image> solo se renderizará si photo no es una cadena vacía (). Si photo es una cadena vacía, el componente <Image> no se incluirá en el árbol de renderizado. Esta es una manera sencilla y efectiva de controlar la visibilidad de un componente basado en el valor de una propiedad en React Native. Asegúrate de ajustar la condición según sea necesario, dependiendo de cómo se represente el valor "vacío" en photo en tu aplicación.', 
                  author: 'JuanMalkijuhygtfrdectfvgybhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
                  username: 'eljuanitomandarinomolamuchokoijuygtyfrdekjh',
                },
              ]}
              keyExtractor = {(item) => item.id}*/
              data = {data}
              keyExtractor = {(item) => item.id_forum}
              renderItem = {({item}) => (
                <ForumCard content = {item}/>
              )}
            />
          </View>
          </View>
      </SafeAreaView>
    </>
  )
}

export default Forums