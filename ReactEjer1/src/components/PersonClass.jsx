import React, { Component } from 'react'

export default class PersonClass extends Component {
  render() {
    const {name,surname,age} = this.props;
    return (
        <div>
            <span> Nombre: {name}</span>
            <br></br>
            <span> Apellido: {surname}</span>
            <br></br>
            <span> Edad: {age}</span>
            <br></br>
        </div>
    )
  }
}
