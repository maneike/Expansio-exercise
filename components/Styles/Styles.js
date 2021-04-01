import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  userInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: 50,
  },
  thumbnail: {
    width: 125,
    height: 125,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: 'blue',
  },
  userName: {
    fontSize: 25,
    paddingTop: 15,
  },
  counter: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  input: {
    height: 40,
    width: 200,
    margin: 40,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 10,
    padding: 10,
    alignSelf: 'center',
  },
  prettyCounter: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50,
    width: 90,
    height: 90,
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 45,
  },
});

export const buttonstyle = StyleSheet.create({
  StyledButtonContainer: {
    elevation: 8,
    margin: 20,
    backgroundColor: 'green',
    borderRadius: 50,
    width: 75,
    height: 75,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  StyledButtonText: {
    fontSize: 18,
    color: '#fff',
    alignSelf: 'center',
  },
});
