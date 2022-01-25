import { useState, useEffect } from 'react';
import { Appbar, List, Button, TextInput } from 'react-native-paper';
import FirebaseContext from 'firebase-connector';

export default function () {
  const [setlists, setSetlists] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState('');

  const fetchSetlists = () => {
    FirebaseContext
      .collection('setlists')
      .onSnapshot((snap) => {
        const setlists = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSetlists(setlists);
        setLoading(false);
      });
  }
  const addSetlist = async () => {
    FirebaseContext.collection('setlists').doc().set({
      name: inputValue,
      description: 'opa',   
    }).then(() => {
      fetchSetlists();
    });
  }

  const removeSetlist = (id) => {
    console.log('ID', id);
    FirebaseContext.collection('setlists').doc(id).delete().then(() => {
      fetchSetlists();
    }).catch((err) => console.log('err', err))
  };


  useEffect(() => {
    fetchSetlists();
  }, []);

  if (loading) return null;

  console.log(setlists)

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Musician setlists" />
        {/* <Appbar.Action icon="pen" color="white" onPress={() => {}}/> */}
        <Appbar.Action icon={require('../../assets/favicon.png')} color="white" onPress={() => { } } />
      </Appbar.Header>
      {setlists.map(setlist => (
        <List.Item
          key={setlist.id}
          title={setlist.name}
          description={setlist.description}
          onPress={() => removeSetlist(setlist.id)}
        />
      ))}
        <TextInput
          label="Name"
          value={inputValue}
          onChangeText={text => setInputValue(text)}
        />
      <Button onPress={addSetlist}>
        Add new setlist
      </Button>
    </>
  );
};
