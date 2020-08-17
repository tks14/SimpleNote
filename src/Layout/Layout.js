import React, {Component} from 'react'
import {Container, Col} from 'react-bootstrap'
import Note from '../Note/Note'
import './Layout.css'

import Toolbar from './../Toolbar/Toolbar'
import Backdrop from './../Backdrop/Backdrop'



class Layout extends Component{

    constructor(props) {
        super(props)    
        this.addNoteHandler = this.addNoteHandler.bind(this)
        this.deleteNoteHandler = this.deleteNoteHandler.bind(this)
        this.updateTextHandler = this.updateTextHandler.bind(this)
      }

    state = {
        noteArray: [{id: 1, entryArray: [{id: 1, text: '', checked: false}]}]
    }

    addNoteHandler(){
        const newId = this.state.noteArray[this.state.noteArray.length-1].id + 1;
        const newText = ''

        this.setState({
            noteArray: this.state.noteArray.concat({id: newId, text: newText})
        })
    }
    
    updateTextHandler = (id, text) => {
        const index = this.state.noteArray.findIndex(item => item.id === id);
        let newArray = this.state.noteArray
        const newNote = {id: id, text: text}
        newArray.splice(index, 1, newNote)
        this.setState({noteArray: newArray})
    }

    deleteNoteHandler = (id) =>{
        const index = this.state.noteArray.findIndex(item => item.id === id);
        let newArray = this.state.noteArray
        newArray.splice(index, 1)
        this.setState({noteArray: newArray})
    }

    render(){
        var componentList = []
        if(this.state.noteArray.length === 0){
            const newArray = [{id: 1, text: 'test'}]
            this.setState({noteArray: newArray})
        }

        for(var i=0; i<this.state.noteArray.length; i++){
            const currentId = this.state.noteArray[i].id
                componentList.push(
                    <Col className='colItem' sm = {6} md={4}>
                        <Note className='item' key={'note'+currentId} updateTextHandler={this.updateTextHandler}  addNoteHandler ={this.addNoteHandler} id = {currentId} deleteNoteHandler = {this.deleteNoteHandler}/> 
                    </Col>
                )
            

        }
        return (
        <div>
            <Toolbar addNoteHandler = {this.addNoteHandler}/>

            <Backdrop/>
            <Container className ='container'>
                                                 
                    {componentList}
                            
            </Container>
        </div>
        
        )
    }

}

export default Layout;