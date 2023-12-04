import React, {Component } from "react";
import swal from 'sweetalert';
import bomb from './images/a.gif';
import c from './images/c.gif';
import bombSound from './audio/bs.mp3'; // Import bomb sound
import coinSound from './audio/cs.mp3'; // Import bomb sound
import winSound from './audio/ws.mp3'; // Import bomb sound
import './images/modal.css';
import open from './images/OPEN2.png';
import close from './images/close2.png';


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
      border:'1px solid black',
      backgroundImage: `url(${close})`,
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat',
backgroundPosition: 'center',
      
      
      },
      stle3:{
            color:'red',
            height:'100px',
            width:'100px',
             border:'1px solid black',
            backgroundImage: `url(${open})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
            
            
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
   // Check if this.props.over.music is defined before calling play
   
   if (this.props.over.state.music) {
      this.props.over.state.music.pause();
  
      // Reset the playback position to the beginning
      this.props.over.state.music.currentTime = 0;
  }
      setTimeout(() => {
            swal({ title: "BOMB DETONATED!",
            iconHtml: '<img src="./images/a.gif">',
            text:"YOU CLICKED A BOMB!!",

      
      
               })
            .then((value) => {


           /*
                  swal.fire({
                        title: "Please Enter Your Name",
                        input: "text",
                        inputAttributes: {
                          autocapitalize: "off"
                        },
                        showCancelButton: true,
                        confirmButtonText: "Look up",
                        showLoaderOnConfirm: true,
                        preConfirm: async (login) => {
                          try {
                            const githubUrl = `
                              https://api.github.com/users/${login}
                            `;
                            const response = await fetch(githubUrl);
                            if (!response.ok) {
                              return swal.showValidationMessage(`
                                ${JSON.stringify(await response.json())}
                              `);
                            }
                            return response.json();
                          } catch (error) {
                            swal.showValidationMessage(`
                              Request failed: ${error}
                            `);
                          }
                        },
                        allowOutsideClick: () => !swal.isLoading()
                      }).then((result) => {
                        if (result.isConfirmed) {
                          swal.fire({
                            title: `${result.value.login}'s avatar`,
                            imageUrl: result.value.avatar_url
                          });
                        }
                      });




*/

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
                        if (this.props.over.state.music) {
                              this.props.over.state.music.pause();
                          
                              // Reset the playback position to the beginning
                              this.props.over.state.music.currentTime = 0;
                          }
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
               
          return(<div style={this.state.stle3}  onClick={this.handleClick} >
            
            <img src={bomb} alt="Bomb" style={this.state.image}></img>
    
            </div>
            
            );
            }else{
                  return(<div style={this.state.stle2}  onClick={this.handleClick} >
            
                     
                
                        </div>);
            }

      }else{
        
            if(this.state.clicked===true){
        return(<div style={this.state.stle3}  onClick={this.handleClick} >
            
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
