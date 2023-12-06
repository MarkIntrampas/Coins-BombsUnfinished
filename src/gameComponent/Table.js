
import React, { Component, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';




class Table extends Component{
 
    
    
    constructor(props){

    }


    render(){
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
      
      
        if(this.state.fetched===false){
       fetch();
        }
      
      
   return();


    }

}

export default  Table;