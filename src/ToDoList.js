import { Component } from 'react';
import Image from './success.png';

export class ToDoList extends Component {
    constructor() {
        super();

        this.state ={
            userInput: '',
            toDoList: []
        }
    }

    onChangeEvent(e){
        this.setState({userInput: e})
    }

    onSubmitForm(e) {
        e.preventDefault();
    }

    addItem(input) {
        if (input === '') {
            alert('Please enter an item!')
        }
        else {
            let listArray = this.state.toDoList;
            listArray.push(input);
            this.setState({toDoList: listArray, userInput: ''})
        }        
    }
    
    crossedItem(event) {
        const listItem = event.target;
        listItem.classList.toggle('crossed');
    }

    deleteItem() {
        this.setState({toDoList: []})
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onSubmitForm}>
                    <div className="container">
                        <input onChange={(e) => {this.onChangeEvent(e.target.value)}} type="text"
                        placeholder="What are your plans for today?"
                        value={this.state.userInput}/>
                    </div>
                    <div className="container">
                        <button className="btn add" onClick = {() => this.addItem(this.state.userInput)}>ADD</button>
                    </div>
                    <ul>
                        {this.state.toDoList.map((item, index) => (
                        <li onClick={this.crossedItem} key={index}><img src={Image} alt='checkmark' width='32px'/>{item}</li>
                        ))}                        
                    </ul>
                    <div className="container">
                        <button className="btn delete" onClick={() => this.deleteItem(this.state.toDoList)}>DELETE</button>
                    </div>
                </form>
            </div>
        )
    }
}