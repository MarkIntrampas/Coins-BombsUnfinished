
import React, { Component } from 'react';
import './style.css';
import Piece from './gameComponent/Piece.js';
import coinSound from './gameComponent/audio/cs.mp3'; // Import bomb sound
import music from './gameComponent/audio/bm.mp3'; // Import bomb sound
import bomb from './gameComponent/images/a.gif';
import c from './gameComponent/images/c.gif';
import reset from './gameComponent/images/reset.png';
import bc from './gameComponent/images/bc.jpg';
import wood from './gameComponent/images/wood.webp';
import './button.css';


class App extends Component{
p=[];

constructor(props){
super(props);
this.state = {
statu: 'Starting',
music:new Audio(music),
bombM: 0,
bombC: 0,
coinC: 0,
coinM: 0,
style:{
backgroundImage: `url(${bc})`,
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat',
backgroundPosition: 'center',
height:'100vh',
width:'100%',
display:'flex',
flexDirection:'column',
justifyContent:'center',
alignItems:'center'
},
board:{
width:'auto',
height:'auto',
padding:'10px',
border:'3px soid white',
backgroundColor:'white',
display:'grid',
backgroundImage: `url(${wood})`,
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat',
backgroundPosition: 'center',
gridTemplateRows:'100px 100px 100px',
gridTemplateColumns:'100px 100px 100px',
gridGap: '10px',
border:'3px solid #633b3b',
backgroundColor: 'rgba(0, 0, 0, 0.5)'
},
image:{
  height:'10px',
  width:'10px',
  minHeight:'30px',
  minWidth:'30px'    
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
 const coinAudio = new Audio(coinSound);
            coinAudio.play();
      this.state.music.play();
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

  this.p=pieces;
  this.setState({ 
    coinC: coinCount,
    coinM: coinCount,
    bombC: bombCount,
    bombM: bombCount,
    statu: 'going' });
}

restart = ()=>{

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
  this.state.music.pause();
  
 this.state.music.currentTime = 0;
  this.setState({ 
    coinC: coinCount,
    coinM: coinCount,
    bombC: bombCount,
    bombM: bombCount,
    statu: 'Starting' });

}


render() {
if(this.state.statu==="going"){
  
  
  
  
 
  return (
 
   
    <div className="App" style={this.state.style}>
     <div id="bar">   
      <h1 class="label"><img src={c} alt="Icon" style={this.state.image} /> {this.state.coinC}/{this.state.coinM}</h1>
      <h1 class="label"> <img src={bomb} alt="Icon" style={this.state.image} /> {this.state.bombC}/{this.state.bombM} </h1>
      <button id="restart" onClick={this.restart}> <img src={reset} alt="Icon" style={this.state.image} /> </button>
     </div>
      <div style={this.state.board}>
         

      
        {this.p}
     
         
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
