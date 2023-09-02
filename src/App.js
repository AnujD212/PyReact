// import logo from './logo.svg';

import Card from './components/Card';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="d-flex gap-4 justify-content-center pt-5">


        <Card title="Javascript" src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" prag="This is related to Javascript languagge which is widely used in the world" btn="Go to Javascript" />

        <Card title="Python" src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" prag="This is related to python languagge which is widely used in the world " btn="Go to Python" />
        <Card />

        <Card title="Ruby" src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" prag="This is related to ruby languagge which is widely used in the world" btn="Go to R" />
        <Card />


      </div>
    </>
  )
}

export default App;
