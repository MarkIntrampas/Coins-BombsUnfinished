
import React, { Component, useEffect } from 'react';
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
//import { createClient } from '@supabase/supabase-js';
import table from  './gameComponent/Table.js';
import Table from './gameComponent/Table.js';

class App extends Component{
p=[];
list=[];





constructor(props){
super(props);
this.state = {
fetched:false,
reload:true,
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
  /*
  const supabaseUrl = 'https://tcrxownxfmycjqljaptx.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjcnhvd254Zm15Y2pxbGphcHR4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMTY3OTY0MiwiZXhwIjoyMDE3MjU1NjQyfQ.-qujbqUmsCbNl_HYggtO1bkEADscJZ_zL3vH3Xcgh3o';
  const supabase = createClient(supabaseUrl, supabaseKey);
  const l = [];
fetch = async ()=>{
 if(this.state.fetched===false){
    try {
      const { data: items, error } = await supabase.from('Scores').select('*');
     
      if (error) {
        throw error;
      }else{
        items.forEach((item) => {
          console.log(item.Name);
          var row = document.createElement("tr");
          row.innerHTML='';

          var c1 = document.createElement("td");
          c1.innerHTML=item.Name;
          var c2 = document.createElement("td");
          c2.innerHTML=item.coins;
          var c3 = document.createElement("td");
          c3.innerHTML=item.guess;
          var c4 = document.createElement("td");
          c4.innerHTML=item.score;

          row.appendChild(c1);
          row.appendChild(c2);
          row.appendChild(c3);
          row.appendChild(c4);
          
          



        document.getElementById('tbody').appendChild(row);
        });
        this.list=l;
        
    
    
   
      }
   
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
    this.setState({fetched:true});
  }
  }


 fetch();
  
  */
 if(this.state.reload===false){
  this.setState({reload:true});
  window.location.reload();
}
 
 
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
  /*
  const supabaseUrl = 'https://tcrxownxfmycjqljaptx.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjcnhvd254Zm15Y2pxbGphcHR4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMTY3OTY0MiwiZXhwIjoyMDE3MjU1NjQyfQ.-qujbqUmsCbNl_HYggtO1bkEADscJZ_zL3vH3Xcgh3o';
  const supabase = createClient(supabaseUrl, supabaseKey);
  const l = [];
fetch = async ()=>{
 if(this.state.fetched===false){
    try {
      const { data: items, error } = await supabase.from('Scores').select('*');
     
      if (error) {
        throw error;
      }else{
        items.forEach((item) => {
          console.log(item.Name);
          var row = document.createElement("tr");
          row.innerHTML='';

          var c1 = document.createElement("td");
          c1.innerHTML=item.Name;
          var c2 = document.createElement("td");
          c2.innerHTML=item.coins;
          var c3 = document.createElement("td");
          c3.innerHTML=item.guess;
          var c4 = document.createElement("td");
          c4.innerHTML=item.score;

          row.appendChild(c1);
          row.appendChild(c2);
          row.appendChild(c3);
          row.appendChild(c4);
          
          



        document.getElementById('tbody').appendChild(row);
        });
        this.list=l;
        
    
    
   
      }
   
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
    this.setState({fetched:true});
  }
  }


 //fetch();
  
*/
 
  return (





    <div className="App" style={this.state.style}>
    
     <button id="start" onClick={this.start}>START GAME</button>
      <div id="list">
   
        <table id="table">
          <thead>
          <tr>
            <th>NAME</th>
            <th>COINS</th>
            <th>GUESSED</th>
            <th>SCORE</th>
          </tr>
          </thead>
         <Table />
        </table>


      </div>
         
      </div>
  
  );
  
}
  
}

}

export default App;
