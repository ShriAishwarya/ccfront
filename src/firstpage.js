import { Link } from "react-router-dom";
import axios from "axios";
import React,{Component} from "react";
function FirstPage (){
    return(
        <div className="frontp" align-center> 
          <h1>AGRICULTURAL GROWTH TRACKING SYSTEM</h1>
          
            
            <button className="playbut"><Link className="but" to='/getvalues'>RECORDS OF PLANT DETAILS</Link></button>
            <button className="playbut"><Link className="but" to='/postvalue'>ENTER THE PLANT DETAILS</Link></button>
            <button className="playbut"><Link className="but" to='/putvalues'>MODIFY PLANT DETAILS</Link></button>
            <button className="playbut"><Link className="but" to='/deleteva'>REMOVE PLANT DETAILS</Link></button>

          
        </div>
    );

}
export default FirstPage;
