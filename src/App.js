import React, { Component } from "react"
import logo from "./logo.svg"
import axios from "axios"
import "./App.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      allthedata: [],
      typetext: ""
    }
  }

  componentDidMount() {
    axios
      .get("/api/getUsers")
      .then(response => this.setState({ allthedata: response.data }))
  }

  textHandler(val){
    this.setState({typetext: val})
  }

  creator(item){
axios.post('/api/created').then(response => console.log(response))
  }

  render() {
    const { allthedata } = this.state
    const mappedData = allthedata.map((item, i) => (
      <div key={i}>
        <p className="doody">{item.item_name}</p>
        <img style={{ margin: "300px" }} src={item.item_picurl} />
      </div>
    ))
    console.log(this.state)
    return (
      <div className="flexboxclass">
      <input placeholder="Hi" onChange={(e)=> this.textHandler(e.target.value)} />
      <div onClick={() => this.creator(this.state.typetext)}



        Test:
        {mappedData}
      
      </div>
    )
  }
}

export default App
