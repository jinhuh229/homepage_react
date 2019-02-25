import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';
import AboutMe from './AboutMe/AboutMe.js';


class App extends Component {

  state = {
    persons:[
      {id:'1', name: 'Personal Calendar', age:'1'},
      {id: '2', name: 'Meet Up', age:'2'},
      {id: '3', name: 'HomePage', age:'3'},
      {id: '4', name: 'HomePage2', age:'4'},
      {id: '5', name: 'Church Contact Information System', age:'5'},
      {id: '6', name: 'Smile Line Dental Lab Website', age:'6'}
    ],
    otherState: 'some other value'
  }

 

  nameChangedHandler = (event) => {
    this.setState({

      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 27 }
      ]


    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
    }


  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex,1);
    this.setState({persons: persons})
  }

  render() {

    const style ={

      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

     let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person,index) =>{
              return <Person 
                    
                    name ={person.name} 
                    age = {person.age} 
                    key = {person.id}
                    />

          })}


        </div>
      );
    }

    return (
      
      <div className="App">
        <h1>Jin Y. Huh</h1>
        <p>Software Engineer | Web Developer</p>
        <AboutMe />
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      
      </div>




    );
  }
}

export default App;
