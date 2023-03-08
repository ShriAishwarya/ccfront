import React from 'react';  
import { Link } from "react-router-dom";   
import axios from 'axios';  


class Deletion extends React.Component
{
    state ={
        Expense:[]
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8080/get')
        .then(response => {
          this.setState({ Expense: response.data });
        })
        .catch(error => {
          console.log(error);
        });
    
    }
    async remove(id)
    {
        axios.delete('http://127.0.0.1:8080/del/'+id,
        {
            method: 'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
        })
    
        .then(response => response.json());
    }
    render()
    {
        const {Expense} = this.state;
    const rows=
    Expense.map(Expense =>
        <tr key={Expense.id}>
            <td className="text-left">{Expense.id}</td>
            <td className="text-left">{Expense.type}</td>
            <td className="text-left">{Expense.day1}</td>
            <td className="text-left">{Expense.day5}</td>
            <td className="text-left">{Expense.day10}</td>
            <td className="text-left">{Expense.day15}</td>
            <td className="text-left">{Expense.yield_percentage}</td>
            <td><button size="sm" color="danger" onClick={() => this.remove(Expense.id)} onChange={Expense}>Delete</button></td>
        </tr>)


    return(
        <div>
        <div class="table-title">
        <h1>DELETE DETAILS HERE</h1>
        </div>
        <table class="table-fill">
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
                   {rows}
                </tbody>
         </table>   
         <button type="button" className="bbtn"><Link to="/" >Home</Link></button>
            <br></br> 
        </div>
    );
}
}
export default Deletion;