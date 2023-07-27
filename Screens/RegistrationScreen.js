import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

const RegistrationScreen = () => {
  return (
    <View style={style.container}>
      <Image
        source={require("../assets/add_photo.png")}
        style={style.logoUser}
      />
      <Image
        style={style.addUser}
        source={require("../assets/add.png")}
      ></Image>

      <Text style={style.title}>Реєстрація</Text>
      <TextInput style={style.input} placeholder="Логін"></TextInput>
      <TextInput
        style={style.input}
        placeholder="Адреса електронної пошти"
      ></TextInput>
      <TextInput style={style.input} placeholder="Пароль"></TextInput>
      <TouchableOpacity style={style.button}>
        <Text style={style.buttonText}>Зареєстуватися</Text>
      </TouchableOpacity>
      <Text style={style.titleQuestion}>Вже є акаунт? Увійти</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 90,
    paddingBottom: 120,
    paddingBottom: 20,

    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "relative",
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35.16,
    textAlign: "center",
    marginBottom: 33,
  },
  titleQuestion: {
    color: "#1B4371",
    textAlign: "center",
  },

  logoUser: {
    width: 120,
    height: 120,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderRadius: 16,
    position: "absolute",
    top: -60,
  },

  addUser: {
    position: "absolute",
    top: 20,
    left: 203,
  },

  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    width: "100%",
    height: 50,
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
    borderStyle: "solid",
    borderRadius: 10,
    paddingLeft: 16,
    paddingRight: 16,
  },
  button: {
    width: "100%",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
    marginTop: 27,
    marginBottom: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
export default RegistrationScreen;
