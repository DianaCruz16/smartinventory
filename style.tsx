import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  centerView:{
    alignItems: 'center',
  },

  bottom: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10
  },

  button: {
    backgroundColor: '#1E8A8A',
    padding: 10,
    paddingTop: 7,
    paddingBottom: 7,
    borderRadius: 8,
    opacity: 0.9,
    width: 300,
    alignItems: 'center',
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
  },

  input: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    width: 300,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10
  },

  labelInput: {
    fontWeight: 'bold',
    fontSize: 22,
  }

});