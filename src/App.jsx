import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
function App() {
  return (
    <>
      <NavBar />
      <ItemListConteiner greeting="Bienvenidos a Clementina"/>
    </>
  );
}

export default App;
