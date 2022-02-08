import styled from "styled-components";


import React from 'react';

export const Product = () => {

  state = {    // te5ali esmeha state
    producttt: this.props.prod,  //prod howa eli ba3thou min 8adi  //producttt sami chnowa
    likes: 0,
    updated: false,
  };
  addLikes() {
    this.setState((previouss) => ({   //setstate methode predefinie
      likes: previouss.likes + 1,
      updated: true,
    }));
    console.log("stated updated");
  }
    return (
      
      <ProductFrame>
        <ProductImageWrapper>
          <ProductImage src={this.state.producttt.img}></ProductImage>
        </ProductImageWrapper>
        <ProductInfoWrapper>{this.state.producttt.name}</ProductInfoWrapper>
        <ProductInfoWrapper>{this.state.producttt.price}</ProductInfoWrapper>
          {/* <h1>{this.props.name}</h1> */}

        <p>likes : {this.state.likes}</p>
        <button onClick={this.addLikes}>Like</button>
        <ProductInfoWrapper>{this.state.producttt.likes}</ProductInfoWrapper>
      </ProductFrame>
    );
  
    
};



const ProductFrame = styled.div`
  border-radius: 25px;
  min-height: 150px;
  min-width: 150px;
  background-color: rgb(110, 110, 110, 0.7);
  margin: 10px;
  display: flex;
  flex-direction: column;
`;
const ProductImageWrapper = styled.div`
  margin: 5px;
  max-width: 150px;
`;
const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 25px;
`;
const ProductInfoWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  & > span {
    text-align: center`;
