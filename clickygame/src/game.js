import React, {Component} from 'react'
import {Data} from './seed'
import Card from './Card';
import Navbar  from './navbar';
let newArray= Data;
class Game extends Component{

    state ={
        trail:[],
        wins: 0,
        losses: 0,
        message: ''
    }
    stats = (prob) =>{
        if (prob === 'win'){
        this.setState({message:' CORRECT BRO!'})
         return this.setState(prevState =>({wins: prevState.wins +1}))
        }  
        this.setState({message:'WTF BRO!! TRY AGAIN!'})
        return this.setState(prevState =>({losses: prevState.losses +1}))
      }

    click = (key) =>{
       
        if(this.state.trail.indexOf(key) > -1){
            
            return this.stats('lose')
        }
        else{
            this.setState(prevState =>({trail: [...prevState.trail,key]}))

            return this.stats('win');


        }

    }
    shuffle =(array) =>{
        var i = 0
        , j = 0
        , temp = null
    
      for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array
    }
        componentDidMount(){
            this.shuffle(newArray);
            console.log(this.state)
        }
        componentDidUpdate(){
            this.shuffle(newArray);
            console.log(this.state)
        }
    render(){

        return(
            <div className = 'gameCont'>
            <Navbar wins = {this.state.wins} message = {this.state.message} losses= {this.state.losses}></Navbar>
            {newArray.map(item =>

            <Card image ={item.image} key ={item.id} value= {item.id} trail= {this.click}></Card>

            )}
            </div>
        )

    }
}
export default Game