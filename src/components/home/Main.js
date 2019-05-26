import React, { Component } from 'react';
const menuMakanan = [
  {
    nama : "Mie Ayam",
    harga: 10000
  },
  {
    nama : "Bakso",
    harga: 15000
  },
  {
    nama : "Mie Ayam Bakso",
    harga: 20000
  },
  {
    nama : "Soto",
    harga: 10000
  },
];

class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      title : "Menu Makanan",
      title2: "Menu Minuman",
      inputValue : "",
      inputKota: "",
    }
    this.rubahData = this.rubahData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  // rubahData(){
  //     this.setS ({title : "Pilih Makanan"});
  // }

  rubahData(){
    this.setState((state,props) => {
      return {
        title : state.title2,
        title2 : state.title
      };
    });
  }

  handleChange(value, e){
      // this.setState({inputValue : e.target.value});
      const eventTarget = e.target.value;
      this.setState((state,props) => {
        return {
          [value] : eventTarget
        };
      });
  }

  render(){
    return(
      <div>
        <h3>{this.state.title}</h3>
        <h2>{this.state.title2}</h2>
        <button onClick={this.rubahData}>Rubah data</button>
        <br/>
        <br/>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={(e)=>this.handleChange("inputValue", e)}
          placeholder="nama"
        />
        <input
          type="text"
          value={this.state.inputKota}
            onChange={(e)=>this.handleChange("inputKota", e)}
          placeholder="kota"
        />

        {menuMakanan.map((data, index) => {
          return (
            <div key={index}>
              <p>No : {index + 1}</p>
              <p>Nama Makanan : {data.nama}</p>
              <p>Harga : {data.harga}</p>
            </div>
          );
        })}

      </div>
    );
  }
}

export default Main;
