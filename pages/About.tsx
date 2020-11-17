import React from "react"
import { View, Text } from "react-native"
import { ButtonAction } from "../interfaces"
import Button from "../components/Button"
import { Icon } from "react-native-elements"
import stylesB from "../styles/base"
import styles from "../styles/aboutpage"

const About: React.FC<ButtonAction> = ({ toggleModal }) => {
  return (
    <View style={styles.container}>
      <Button
        toggleModal={toggleModal}
        title={
          <Icon style={stylesB.iconAbout} name='arrow-back' color='#517fa4' />
        }
      />
      <View style={styles.wrapperContent}>
        <Text style={styles.title}>About app</Text>
        <View>
          <Text style={styles.about}>
            Fast and powerful calculator allows you to calculate equations of
            varying complexity
          </Text>
        </View>
        <Text style={styles.author}>Developed by Vasyl Hai</Text>
      </View>
    </View>
  )
}

export default About
