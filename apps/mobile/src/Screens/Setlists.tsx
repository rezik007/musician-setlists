import { useState, useEffect } from 'react';
import { Appbar, List, Button } from 'react-native-paper';
import FirebaseContext from 'firebase-connector';

export default function () {

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);




  useEffect(() => {
    FirebaseContext
      .collection('setlists')
      .onSnapshot((snap) => {
        const blogs = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTodos(blogs);
        setLoading(false);
      });
  }, []);

  if (loading) return null;

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Musician setlists" />
        {/* <Appbar.Action icon="pen" color="white" onPress={() => {}}/> */}
        <Appbar.Action icon={require('../../assets/favicon.png')} color="white" onPress={() => { } } />
      </Appbar.Header>
      {todos.map(todo => (
        <List.Item
          title={todo.name}
          description={todo.description}
          left={props => <List.Icon {...props} icon="folder" />} />
      ))}
      <Button onPress={() => { } }>
        Add new setlist
      </Button>
    </>
  );
};
