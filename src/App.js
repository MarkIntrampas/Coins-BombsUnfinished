
import React, { Component } from 'react';
import './style.css';
import Piece from './gameComponent/Piece.js';

class App extends Component{

constructor(props){
super(props);
this.state = {
statu: 'Starting',
style:{
backgroundColor:'#2c2f33',
height:'100vh',
width:'100%',
display:'flex',
flexDirection:'column',
justifyContent:'center',
alignItems:'center'
},
board:{
width:'300px',
height:'300px',
border:'2px soid white',
backgroundColor:'white',
display:'grid',
gridTemplateRows:'100px 100px 100px',
gridTemplateColumns:'100px 100px 100px'

},
button:{
height:'100px',
width:'400px',
padding:'20px',
fontSize:'44px',
backgroundColor:'#7289da',
color:'white',
border:'3px solid white'
}
};

}

gameover=()=>{
 /* alert("ki");


this.setState({ statu: 'start' });

*/ alert("hi");
if(this.lastClicked==="bomb"){
  alert("bomb");
}else{
  alert("no");


}
}

start = ()=>{
  this.setState({ statu: 'going' });
}

restart = ()=>{
  this.setState({ statu: 'Starting' });

}


render() {
if(this.state.statu==="going"){
  
  let pieces =[];
  let bombCount=0;
  let coinCount=0;
  for(let i=1; i<=9; i++){
    let num= Math.random(1,0);
    if(num>=0.5){
      bombCount++;
    }else{
      coinCount++;
    }
    pieces.push(<Piece type={num>=0.5 ? "bomb":"coin" } status="unclicked" over={this}/>);
  }
  let maxBomb=bombCount;
  let maxCoin=coinCount;
  return (
 
   
    <div className="App" style={this.state.style}>
     <div id="bar">   
      <h1 class="label">COINS: {coinCount}/{maxCoin}</h1>
      <h1 class="label">BOMBS: {bombCount}/{maxBomb} </h1>
      <button id="restart" onClick={this.restart}>RESTART</button>
     </div>
      <div style={this.state.board}>
         

      
        {pieces}
     
         
      </div>
      
    </div>
  );
}else{
  return (
 
   
    <div className="App" style={this.state.style}>
    
     <button id="start" onClick={this.start}>START GAME</button>
         
      </div>
  );
  
}
  
}

}

export default App;
