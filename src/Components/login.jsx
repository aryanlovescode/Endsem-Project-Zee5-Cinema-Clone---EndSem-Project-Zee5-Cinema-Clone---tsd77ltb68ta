import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = (props)=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [appType, setAppType] = useState("ott");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate()
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("projectID", "tsd77ltb68ta");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email,
      password,
      appType,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/login",
        requestOptions
      );
      const data = await response.json();
      console.log(data.status);
      if (data.status == "success"){
        navigate("/home")
        props.setLoginStatus(true)
      } else{
        setErrorMessage("Wrong Credentials!")
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      }
    } catch (error) {
      console.error(error);
    }
  };
    return(
        <div className="login-parent bg-black opacity-90 flex justify-center items-center h-screen">
            <div className="bg-white rounded-md p-7">
            <div class="w-[246px] font-normal text-4xl">
                Login to ZEE5
            </div>
            <div className="flex justify-center mt-4">
                <input type="email"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       placeholder="Email"
                       className="px-4 py-2 rounded-xl border border-[#D400D9] focus:outline-none focus:border-[#D400D9]"></input>
            </div>
            <div className="flex justify-center mt-4">
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" className="px-4 py-2 rounded-xl border border-[#D400D9] focus:outline-none focus:border-[#D400D9] m-auto"></input>
            </div>
            <div class=" flex justify-center mt-4">
                <button onClick={handleSubmit} className="bg-[#9900CE] opacity-60 text-white font-bold py-2 px-4 rounded-xl w-80">
                    Sign In
                </button>
            </div>
            <div class="mt-4">
                <span className="font-bold text-xl text-red-900 ">{errorMessage} </span>
                
            </div>
            <div class="mt-1">
                <span className="font-normal text-xl">New to Zee5, </span>
                <Link to = "/home/signup"><span className="text-xl font-bold cursor-pointer">Sign Up here.</span></Link>
                
            </div>

            </div>
        </div>
    )
}

export default LoginPage;