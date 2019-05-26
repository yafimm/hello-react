import React from 'react';
import Header from './Header';
import Top from './Top';
// import Main from './Main';
// import Form from './Form';
import CustomInput from './CustomInput';
import Footer from './Footer';
// import List from './List';

function App() {
  return (
    <div>
      <Header list="3 Terbaik"/>
      <Top />
      <CustomInput />
      {
      // <Form />
      // <Main/>
      // <List/>
      }
      <Footer name="Makanan Nusantara" tahun="2019"/>
    </div>
  );
}

// class App extends React.Component {
//   render(){
//     return (
        // <div>
        //   <Header list="3 Terbaik"/>
        //   <Top/>
        //   <Main/>
        //   <List/>
        //   <Footer name="Makanan Nusantara" tahun="2019"/>
        // </div>
//     );
//   }
// }

export default App;
