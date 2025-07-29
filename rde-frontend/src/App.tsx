import { Admin, Resource, ListGuesser } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

function App() {
  return (
    <Admin dataProvider={simpleRestProvider('http://localhost:5103/api')}>
      <Resource name="users" list={ListGuesser} />
    </Admin>
  );
}

export default App;