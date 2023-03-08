import axios from "axios";
import { Link } from "react-router-dom";
import React,{Component} from "react";
class Table extends Component{
    state = {
        data:[]
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8080/get')
        .then(response =>{
            this.setState({ data: response.data});
        })
        .catch(error => {
            console.log(error);
        });
    }
        render(){
            return(
                <div>
                <h1>THE RECORDS OF PLANT GROWTH:</h1>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Type</th>
                            <th>Day1(CM)</th>
                            <th>Day5(CM)</th>
                            <th>Day10(Cm)</th>
                            <th>Day15(CM)</th>
                            <th>Yield(%)</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(user =>(
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.type}</td>
                                <td>{user.day1}</td>
                                <td>{user.day5}</td>
                                <td>{user.day10}</td>
                                <td>{user.day15}</td>
                                <td>{user.yield_percentage}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button type="button" className="bbtn"><Link to="/" >Home</Link></button>
            <br></br>
                </div>
            );
        }
    }
    export default Table;