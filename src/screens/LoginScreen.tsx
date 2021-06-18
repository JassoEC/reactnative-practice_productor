import React from 'react';
import {
  TextInput,
  Text,
  Platform,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {Background} from '../components/Background';
import {WhiteLogo} from '../components/WhiteLogo';
import {useForm} from '../hooks/useForm';
import {loginStyles} from '../theme/loginTheme';

export const LoginScreen = () => {
  const {email, password, onChange, form} = useForm({
    email: '',
    password: '',
  });

  const onlogin = () => console.log({form});

  return (
    <>
      <Background />
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={loginStyles.formContainer}>
          <WhiteLogo />
          <Text style={loginStyles.title}>Login</Text>
          <Text style={loginStyles.label}>Email</Text>
          <TextInput
            placeholder="Email"
            placeholderTextColor="rgba(255,255,255,0.4)"
            keyboardType="email-address"
            underlineColorAndroid="white"
            style={[
              loginStyles.inputField,
              Platform.OS === 'ios' && loginStyles.inputFieldIos,
            ]}
            selectionColor="white"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={email => onChange(email, 'email')}
            onSubmitEditing={onlogin}
          />
          <Text style={loginStyles.label}>Contraseña</Text>
          <TextInput
            placeholder="Contraseña"
            placeholderTextColor="rgba(255,255,255,0.4)"
            underlineColorAndroid="white"
            secureTextEntry
            style={[
              loginStyles.inputField,
              Platform.OS === 'ios' && loginStyles.inputFieldIos,
            ]}
            onChangeText={password => onChange(password, 'password')}
            onSubmitEditing={onlogin}
          />
          <View style={loginStyles.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={loginStyles.button}
              onPress={onlogin}>
              <Text style={loginStyles.textButton}>Login</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={loginStyles.newUserContainer}
              onPress={() => {}}>
              <Text style={loginStyles.textButton}>Nueva cuenta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
