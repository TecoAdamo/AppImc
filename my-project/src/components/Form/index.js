import React, { useState } from "react";
import { TextInput, View, Text, Button, Keyboard, Vibration, TouchableOpacity } from "react-native";
import ResultImc from "./ResultImc"; 
import styles from "./style";

export default function Form() {

  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha seu peso e a altura.");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular I.M.C");
  const [errorMessage, setErrorMessage] = useState(null);
  const [buttonPressed, setButtonPressed] = useState(false);

  function imcCalculator(weight, height) {
    return (weight / (height * height)).toFixed(2);
  }

  function ValidationImc() {
    if (imc === null) {
      Vibration.vibrate();
      setErrorMessage("Campo obrigatório!");
      return false;
    }
    return true;
  }
  
  function calculateImc() {
    if (weight !== null && height !== null) {
      const calculatedImc = imcCalculator(weight, height);
      setImc(calculatedImc);
      setMessageImc("Seu IMC é igual a:");
      setTextButton("Calcular novamente");
      setErrorMessage(null);
      Keyboard.dismiss();
    } else {
      if (ValidationImc()) {
        setImc(null);
        setMessageImc("Preencha seu peso e a altura.");
        setTextButton("Calcular I.M.C");
      }
    }
  }

  function resetForm() {
    setHeight(null);
    setWeight(null);
    setMessageImc("Preencha seu peso e a altura.");
    setTextButton("Calcular I.M.C");
    setErrorMessage(null);
    setImc(null);
  }

  return (
    <View style={styles.Form}>
      <View style={styles.container}>
        <Text style={styles.textHeigth}>Altura :</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput
          style={[styles.textInput2, { color: 'white' }]}
          onChangeText={setHeight}
          value={height}
          placeholder="Ex: 1.70"
          placeholderTextColor="grey"
          keyboardType="numeric"
        />
      
        <Text style={styles.textWeigth}>Peso :</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput
          style={[styles.textInput3, { color: 'white' }]}
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex: 70"
          placeholderTextColor="grey"
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={styles.button}
          onPressIn={() => setButtonPressed(true)}
          onPressOut={() => setButtonPressed(false)}
          onPress={imc !== null ? resetForm : calculateImc}
        >
          <View>
            <Text style={[styles.buttonText, buttonPressed && styles.buttonPressedText]}>{textButton}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ResultImc messageResultImc={messageImc} ResultImc={imc} />
    </View>
  );
}
