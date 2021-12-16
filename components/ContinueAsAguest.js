import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Dimensions} from 'react-native';

var width = Dimensions.get('window').width;

const ContinueAsAguest = () => {
  const onclickLoad = () => {
    //тут будет что то
  };
  return (
    <View style={styles.Container}>
      <ScrollView onScroll={e => console.log(e)} scrollEventThrottle={16}>
        <View style={styles.Header}>
          <Image
            style={styles.MySkinImage}
            source={require('./assets/img/smallImage1.png')}
          />
          <View style={styles.SearchAndBag}>
            <Image source={require('./assets/img/icon_search.png')} />
            <Image
              style={styles.bag}
              source={require('./assets/img/icon_bag.png')}
            />
          </View>
        </View>

        <View style={styles.Content}>
          <TouchableOpacity style={styles.Border} onPress={() => onclickLoad()}>
            <View style={styles.positionRelative}>
              <Image
                style={styles.imageForButton}
                source={require('./assets/img/image16.png')}
              />
              <Text style={styles.Text}>SHOP</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => onclickLoad()}
            style={styles.Borders}
          >
            <View style={styles.positionRelativeFor2block}>
              <Image
                style={styles.ImageBlock2}
                source={require('./assets/img/Group18.png')}
              />
              <Image
                style={{
                  position: 'absolute',
                  top: 30,
                  left: 20,
                  width: 200,
                  height: 59,
                }}
                source={require('./assets/img/myskin.png')}
              />
              <Text
                style={{position: 'absolute', top: 30, right: 25, fontSize: 33}}
              >
                club login
              </Text>
            </View>
          </TouchableOpacity>

          <View style={styles.ImageButton}>
            <TouchableOpacity>
              <Image source={require('./assets/img/image12.png')} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image source={require('./assets/img/image11.png')} />
            </TouchableOpacity>
          </View>

          <View style={styles.ImageButton2}>
            <TouchableOpacity>
              <Image source={require('./assets/img/image13.png')} />
            </TouchableOpacity>
          </View>

          <View style={styles.ImageButton3}>
            <TouchableOpacity>
              <Image
                style={{width: 120, height: 110}}
                source={require('./assets/img/image10.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                style={{marginLeft: 10}}
                source={require('./assets/img/Rectangle24.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    margin: 'auto',
  },
  Header: {
    width: width,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  MySkinImage: {
    width: 133,
  },
  SearchAndBag: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
  },
  bag: {
    marginLeft: 10,
    marginRight: 10,
  },
  Content: {
    width: width,
    marginTop: 10,
  },
  Border: {
    borderWidth: 1,
    borderColor: '#C4C4C4',
  },
  Borders: {
    borderWidth: 1,
    borderColor: '#C4C4C4',
    marginTop: 10,
  },
  positionRelative: {
    position: 'relative',
    height: 127,
  },
  positionRelativeFor2block: {
    position: 'relative',
    height: 120,
  },
  imageForButton: {
    position: 'absolute',
    right: 0,
    top: 3,
  },
  Text: {
    fontSize: 60,
    textAlign: 'center',
    paddingBottom: 30,
    paddingTop: 20,
    backgroundColor: 'rgba(240,248,251,0.54)',
    fontFamily: 'Inter',
  },
  ImageBlock2: {
    width: '100%',
  },
  ImageButton: {
    width: 377,
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 30,
  },
  ImageButton2: {
    width: 377,
    marginLeft: 73,
    marginTop: 15,
  },
  ImageButton3: {
    width: 377,
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 45,
  },
});

export default ContinueAsAguest;
