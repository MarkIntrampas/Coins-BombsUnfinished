import React, {Component } from "react";
import swal from 'sweetalert';
import bomb from './images/a.gif';
import c from './images/coin.gif';
import bombSound from './audio/bs.mp3'; // Import bomb sound
import coinSound from './audio/cs.mp3'; // Import bomb sound
import winSound from './audio/ws.mp3'; // Import bomb sound
import './images/modal.css';


class Piece extends Component{

constructor(props){
 super(props);   
this.state={
clicked: false,
stle:{
color:'red',
height:'100px',
width:'100px',
border: '.5px solid white',
backgroundColor:'white'


},
stle2:{
      color:'red',
      height:'100px',
      width:'100px',
      border: '.5px solid white',
      backgroundColor:'#7289da'
      
      
      },
image:{
height:'100%',
width:'100%',
minHeight:'100%',
minWidth:'100%'    
}


}

}    

handleClick = () => {
     
      
       this.setState({ clicked: true });
       
     //  this.props.over();
    
     if(this.props.type==="bomb"){

      //  this.props.over.lastClicked="bomb";
      const bombAudio = new Audio(bombSound);
      bombAudio.play();
      let  a = this.props.over.state.bombC;
      a--;
   this.props.over.setState({bombC:a});
      setTimeout(() => {
            swal({ title: "BOMB DONATED!",
            iconHtml: '<img src="./images/a.gif">',
            text:"YOU CLICKED A BOMB!!",

      
      
               })
            .then((value) => {
                  this.props.over.setState({ statu: 'start' });
            });
            

      
          }, 400); // 2000 milliseconds (2 seconds) 
        
   
    
       }else{
            if(this.state.clicked!==true){

            const coinAudio = new Audio(coinSound);
            coinAudio.play();

        let  a = this.props.over.state.coinC;
               a--;
            this.props.over.setState({coinC:a});
            if(a<=0){
                  setTimeout(() => {
                        const winAudio = new Audio(winSound);
                        winAudio.play();
                        swal("YOU WON!!")
                        .then((value) => {
                              this.props.over.setState({ statu: 'start' });
                        });
                  
                        
                      }, 300)
            }
      }
       }

    };

    componentDidMount() {
   
    }

render(){

        
        
      if(this.props.type==="bomb"){
            if(this.state.clicked===true){
               
          return(<div style={this.state.stle}  onClick={this.handleClick} >
            
            <img src={bomb} alt="Bomb" style={this.state.image}></img>
    
            </div>
            
            );
            }else{
                  return(<div style={this.state.stle2}  onClick={this.handleClick} >
            
                     
                
                        </div>);
            }

      }else{
        
            if(this.state.clicked===true){
        return(<div style={this.state.stle}  onClick={this.handleClick} >
            
            <img src={c} alt="Bomb" style={this.state.image}></img>
    
            </div>);}
            else{
                  return(<div style={this.state.stle2}  onClick={this.handleClick} >
            
                     
                
                        </div>);
            }
      }

    
        

}

}

export default Piece;
