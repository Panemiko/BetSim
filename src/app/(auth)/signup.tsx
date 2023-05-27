import { View, Pressable, Text, TextInput } from "react-native";
import { useState } from "react";
import { signUp } from "../../utils/auth";

export default function AuthSignup() {
  const [fields, setFields] = useState({
    email: "",
    password: "",
    username: "",
  });

  return (
    <View>
      <TextInput
        placeholder="seuemail@exemplo.com"
        onChangeText={(text) => setFields({ ...fields, email: text })}
        autoComplete="off"
        className="text-white"
      />
      <TextInput
        placeholder="ricardinho_massa69"
        onChangeText={(text) => setFields({ ...fields, username: text })}
        autoComplete="off"
        className="text-white"
      />
      <TextInput
        placeholder="shhhhhhhhhh"
        onChangeText={(text) => setFields({ ...fields, password: text })}
        autoComplete="off"
        className=""
      />

      <Pressable onPress={() => signUp(fields)}>
        <Text>CADASTRAR</Text>
      </Pressable>
    </View>
  );
}
