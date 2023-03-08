import axios from "axios";
import { Link } from "react-router-dom";
import React, { Component } from "react";
class Put extends Component {
    constructor(props){
        super(props);
        this.state={
            id:'',
            type:'',
            day1:'',
            day5:'',
            day10:'',
            day15:'',
            yield_percentage:'',
        };
    }
    handleIdChange = (event) =>{
        this.setState({id:event.target.value});
    };
    handleTypeChange = (event) =>{
        this.setState({type: event.target.value});
    };
    handleDay1Change =(event) =>{
        this.setState({day1:event.target.value});
    };
    handleDay5Change =(event) =>{
        this.setState({day5:event.target.value});
    };
    handleDay10Change =(event) =>{
        this.setState({day10:event.target.value});
    };
    handleDay15Change =(event) =>{
        this.setState({day15:event.target.value});
    };
    handleYeildChange =(event) =>{
        this.setState({yield_percentage:event.target.value});
    };
    handleSubmit =(event) =>{
        event.preventDefault();
        const data ={
            id: this.state.id,
            type: this.state.type,
            day1: this.state.day1,
            day5: this.state.day5,
            day10: this.state.day10,
            day15: this.state.day15,
            yeild_percentage: this.state.yield_percentage
        };
       axios.put('http://127.0.0.1:8080/put',data)
    };

    render(){
        return (
    <div className="hi">
        <h1>UPDATE PLANT DETAILS HERE:</h1>

    <form onSubmit={this.handleSubmit} className="login-form">
        <label className="label">ID</label>
        <input
        className="input"
        type="id"
        value={this.state.id}
        onChange={this.handleIdChange}/>
        <br></br>
        <label className="label">TYPE</label>
        <input
        className="input"
        type="type"
        value={this.state.type}
        onChange={this.handleTypeChange}/>
        <br></br>
        <label className="label">Day1(CM)</label>
        <input
        className="input"
        type="day1"
        value={this.state.day1}
        onChange={this.handleDay1Change}/>
        <br></br>
        <label className="label">Day5(CM)</label>
        <input
        className="input"
        type="day5"
        value={this.state.day5}
        onChange={this.handleDay5Change}/>
        <br></br>
        <label className="label">day10(CM)</label>
        <input
        className="input"
        type="day10"
        value={this.state.day10}
        onChange={this.handleDay10Change}/>
        <br></br>
        <label className="label">day15(CM)</label>
        <input
        className="input"
        type="day15"
        value={this.state.day15}
        onChange={this.handleDay15Change}/>
        <br></br>
        <label className="label">Yield(%)</label>
        <input
        className="input"
        type="yield_percentage"
        value={this.state.yield_percentage}
        onChange={this.handleYeildChange}/>
        
        <br></br>

        <button className='button' type="submit">
            Submit
        </button>
        <br></br>
        <br></br>
        <button type="button" className="bbtn"><Link to="/" >Home</Link></button>
            <br></br>
    </form>
    </div> 
        );
    }
}

export default Put; 