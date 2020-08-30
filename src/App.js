import React, { Component } from 'react';
// import React, { useState } from 'react';
// import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';
// import UserInput from './components/UserInput/UserInput';
// import UserOutput from './components/UserOutput/UserOutput';

// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//     color: black;
//   }
// `;

class App extends Component {
  state = {
    persons: [
      {id: '1', name: "David", age: 30},
      {id: '2', name: "Vinny", age: 32},
      {id: '3', name: "Aguero", age: 29},
    ],
    // username: "Rahul Dravid"
    showPersons: false,
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    // update the original state immutably
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  nameChangeHandler = (id, event) => {
    // find the index of the person
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    // get the person via the personIndex
    const person = {...this.state.persons[personIndex]};

    // update the person name
    person.name = event.target.value;

    // get the mutable persons state
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  // usernameChangeHandler = (event) => {
  //   this.setState({
  //     username: event.target.value
  //   });
  // }

  render() {
    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={this.nameChangeHandler.bind(this, person.id)}/>
          })}
        </div>
      );
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'lightred',
      //   color: 'black'
      // }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hello! I'm a React App</h1>
        <p className={classes.join(' ')}>Is this really working!</p>
        <button className="button"
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        {persons}
        {/* <hr />
        <UserInput changeName={this.usernameChangeHandler} name={this.state.username} />
        <UserOutput name={this.state.username}/> */}
      </div>
    )
  }
}

// const App = (props) => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       {name: "David", age: 30},
//       {name: "Vinny", age: 32},
//       {name: "Aguero", age: 29},
//     ]
//   });

//   const [otherState, setOtherState] = useState('Some other state');

//   const switchNameHandler = () => {
//     setPersonsState( {
//       persons: [
//         {name: "David Silva", age: 31},
//         {name: "Vinny", age: 32},
//         {name: "Aguero", age: 30},
//       ]
//     } )
//   }

//   console.log(personsState, otherState);

//   return (
//     <div className="App">
//       <h1>Hello!</h1>
//       <p>Is this really working!</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>I'm a defender</Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
//     </div>
//   );
// }

export default App;
