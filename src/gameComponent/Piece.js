import React, {Component } from "react";
import a from './images/a.gif';
import c from './images/coin.gif';


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
      setTimeout(() => {
            alert("YOU CLICKED A BOMB!!!");
            this.props.over.setState({ statu: 'start' });
          }, 500); // 2000 milliseconds (2 seconds) 
        
   
    
       }

    };

    componentDidMount() {
   
    }

render(){

        
        
      if(this.props.type==="bomb"){
            if(this.state.clicked===true){
               
          return(<div style={this.state.stle}  onClick={this.handleClick} >
            
            <img src={a} alt="Bomb" style={this.state.image}></img>
    
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
