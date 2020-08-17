import React, {Component} from 'react'
import './Note.css'
import NoteEntry from './NoteEntry'

class Note extends Component{
    constructor(props) {
        super(props)            
        this.deleteNote = this.deleteNote.bind(this) 
        this.changeHeightHandler = this.changeHeightHandler.bind(this) 
        this.addEntryHandler = this.addEntryHandler.bind(this)  
        this.noteHeight = 100;
        this.deleteEntryHandler = this.deleteEntryHandler.bind(this)
      }


    state = {
        height: 0,
        entryArray: [{id: 1, text: '', checked: false, height: 21}]
    }


    

    render(){
        if(this.state.entryArray.length===0){
            this.state.entryArray.concat({id:1, text: '', checked:false, height: 21})
        }

        let componentArray = []
        for(let i=0; i< this.state.entryArray.length; i++){
            this.noteHeight += this.state.entryArray[i].height;
            componentArray.push(
                <NoteEntry 
                    style = {this.state.entryArray[i].height}
                    key={'entry'+this.state.entryArray[i].id}
                    className='NoteEntry' 
                    changeHeightHandler={this.changeHeightHandler}
                    addEntryHandler={this.addEntryHandler}
                    deleteEntryHandler={this.deleteEntryHandler}
                    id={this.state.entryArray[i].id}
                    text={this.state.entryArray[i].text}
                    checked={this.state.entryArray[i].checked}
                    height={this.state.entryArray[i].height}/>  
                
            )
        }
        return (
            <div className='Note' style = {{height:this.state.height}}>   
                
                <button className='plus' onClick={this.props.addNoteHandler}>+</button>
                             
                <div className='entryArea'>
                    {componentArray}
                </div>
                
                
                <button className='close' onClick={this.deleteNote}>Close</button>
                
            </div>
        )
    }

    deleteNote =()=>{        
        const id = this.props.id
        this.props.deleteNoteHandler(id)        
    }

    changeHeightHandler = (entryId, height) => {
        const index = this.state.entryArray.findIndex(item => item.id === entryId);
        let newArray = this.state.entryArray
        console.log(this.state.entryArray)
        console.log(entryId)
        console.log(height)
        let newEntry = {id: this.state.entryArray[index].id, text: this.state.entryArray[index].text, checked: this.state.entryArray[index].checked, height:height}
        newArray.splice(index, 1, newEntry)
        this.setState({noteArray: newArray})
        this.setNoteHeight();      
    }

    deleteEntryHandler = (id) => {
        const index = this.state.entryArray.findIndex(item => item.id === id);
        if (this.state.entryArray.length === 1){
            this.props.deleteNoteHandler(id)
        }
        else {
            let newArray = this.state.entryArray  
                  
            newArray.splice(index, 1)
            this.setState({entryArray: newArray})
            this.setNoteHeight()
        }

    }

    addEntryHandler = () =>{
        const entryId = this.state.entryArray[this.state.entryArray.length-1].id + 1;
        const newEntry = {id: entryId, text: '', checked: false, height: 21};
        
        this.setState({entryArray: this.state.entryArray.concat(newEntry)})
        this.setNoteHeight();
    }

    setNoteHeight(){
        let result = 125
        for(let i=0;i<this.state.entryArray.length; i++){
            result += this.state.entryArray[i].height;
        }
        this.setState({height:result})

    }
    
}

export default Note;