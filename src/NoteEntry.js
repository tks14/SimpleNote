import React, {Component} from 'react'
import './NoteEntry.css'
import ContentEditable from 'react-contenteditable'


class NoteEntry extends Component{
    constructor(props) {
        super(props)
        this.contentEditable = React.createRef();
        
      };


    state = {
        id: this.props.id,
        html: "",
        checked: '', 
        height:21,
        decoration:'none',
        color: 'black'
    }


    render(){
        
        return(
            <div className = 'NoteEntry' >
                <button className = 'checkbox' onClick={this.checkBoxClicked}>{this.state.checked}</button>
                <ContentEditable
                    style={{textDecorationLine:this.state.decoration, color:this.state.color}}
                    innerRef={this.contentEditable}
                    html={this.state.html} // innerHTML of the editable div
                    disabled={false}       // use true to disable editing
                    onChange={this.handleChange} // handle innerHTML change
                    className='noteInput' // Use a custom HTML tag (uses a div by default)
                    onKeyDown={this.handleKeyDown}  
                />
                <button className = 'xbox' onClick={this.xBoxClicked}>x</button>
            </div>
        );
    }
    
    checkBoxClicked = () =>{
        if(this.state.checked === ''){
            this.setState({checked:'✓'})
            this.setState({decoration:'line-through'})
            this.setState({color: '#6e6e6e'})
        }
        else if(this.state.checked === '✓'){
            this.setState({checked:''})
            this.setState({decoration:'none'})
            this.setState({color: 'black'})
        }
    }

    xBoxClicked = () => {
        this.props.deleteEntryHandler(this.state.id)
    }

    handleChange = evt => {
        this.setState({ html: evt.target.value });
        console.log(this.state.height, this.contentEditable.current.clientHeight)
        if(this.contentEditable.current.clientHeight+2 !== this.state.height){
            this.setState({height:this.contentEditable.current.clientHeight+2})
            //console.log(this.contentEditable.current.clientHeight);
            this.props.changeHeightHandler(this.state.id, this.contentEditable.current.clientHeight+2)
        }        
        
      }
    
    handleKeyDown = e => {
        if (e.key === 'Enter') {
            console.log('enter pressed');
            this.props.addEntryHandler()
            e.preventDefault();
        }
    }


    

}
export default NoteEntry;