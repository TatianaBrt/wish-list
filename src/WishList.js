import React, { Component } from 'react';


export class WishList extends Component {

  state={inputUser:"",
        wishList:[]}
onChangeEvent(e){
  this.setState({inputUser:e})
}

addItem(input){ 
  if(input === "")
  alert("Please enter an item")
  else{
  let listArray=this.state.wishList;
  listArray.push(input);
  this.setState({wishList:listArray,
    inputUser:""
  })}
}
crossedWord(event){
  const li=event.target;
  li.classList.toggle('crossed');
}

deleteItem(){
  let listArray=this.state.wishList;
  listArray=[];
  this.setState({wishList:listArray});
}

onFormSubmit(e){
  e.preventDefault();
}


  render() {
    return (
      <div>
      <form onSubmit={this.onFormSubmit}>
      <div>
        <input type="text" placeholder='What is your plan on holiday?'
        onChange={(e)=>{this.onChangeEvent(e.target.value)}}
        value={this.state.inputUser}
        />
      </div>
      <div className='container'>
        <button className='btnAdd' onClick={()=>this.addItem(this.state.inputUser)}>Add</button>
      </div>
      <ul>
        {this.state.wishList.map((item,index)=>(
        <li key={index} onClick={this.crossedWord}>{item}</li>
        ))}
      </ul>
      <div className='container'>
      <button className='btnDelete' onClick={()=>this.deleteItem()}>Delete</button>
      </div>
      </form>
      </div>
    )
  }
}

