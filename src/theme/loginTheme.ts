import {StyleSheet} from 'react-native';

export const loginStyles = StyleSheet.create({
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    height: 600,
    marginBottom: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  label: {
    marginTop: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  inputField: {
    color: 'white',
    fontSize: 20,
  },
  inputFieldIos: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    paddingBottom: 3,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  button: {
    borderWidth: 2,
    borderColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 2,
    borderRadius: 100,
  },
  textButton: {
    fontSize: 20,
    color: 'white',
  },
  newUserContainer: {
    alignItems: 'flex-end',
    marginTop: 20,
  },
});
