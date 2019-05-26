import React, { Component } from 'react';
import "./Header.css";

class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      daftar : "Daftar Makanan Nusantara",
      dataList : this.props.list,
      statusRendering : false
    };
    this.handlePesan = this.handlePesan.bind(this);
    this.handleElement = this.handleElement.bind(this);
  }

  handlePesan(value, e){
    e.preventDefault();
    alert(this.state.daftar);
    alert(value);
  }

  handleElement(){
    this.setState((state,props) => {
      return {statusRendering : !state.statusRendering};
    });
  }

  componentDidMount(){
    console.log("Componen Did Mount");
  }

  render(){
    console.log(this.statusRendering);
    return(
      <div>
        {this.state.statusRendering === true ? (
          <div>
            <h1 style={{ color: "red", backgroundColor:"blue", marginTop:"100px" }}>Selamat Datang</h1>
            <h2 className="judulInfo">Silahkan Pilih Makanan</h2>
          </div>
        ) : (
          <div>
            <h1 id="judulKedua">Selamat Tinggal</h1>
            <h2 className="judulInfo">Jangan lupa datang kembali</h2>
          </div>
        )}
        <button onClick={this.handleElement}>Ubah</button>
      </div>
    );
  };

  //
  // render(){
  //   console.log("adaba");
  //   return(
  //     <div>
  //       <h2>Makanan Khas Indonesia</h2>
  //       <p>{this.state.daftar}</p>
  //       <p>{this.state.dataList}</p>
  //       <a href="/" onClick={ (e) => this.handlePesan('Pesan dari header', e)}>
  //         Halaman Header
  //       </a>
  //     </div>
  //   );
  // }
}

export default Header;
