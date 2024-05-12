import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupStatus, setSignupStatus] = useState(""); // State to track signup status
  const [errorMessage, setErrorMessage] = useState(""); // State to track signup status
  const navigate = useNavigate(); // Hook to manage navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("projectID", "tsd77ltb68ta");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "name": name,
      "email": email,
      "password": password,
      "appType": "ott"
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/signup",
        requestOptions
      );
      const data = await response.json();
      console.log(data);
      setSignupStatus(data.status); // Update signup status state
      // Redirect to login page if signup is successful
      if (data.status === "success") {
        navigate("/home/signin");
      }else{
        setErrorMessage(data.message)
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-parent bg-black opacity-90 flex justify-center items-center h-screen">
      <div className="bg-white rounded-md p-7 w-auto">
        <div class=" w-2/3 font-medium text-xl ">
          Create a new account
        </div>
        <div className="flex justify-center mt-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name" className="px-4 py-2 rounded-xl border border-[#D400D9] focus:outline-none focus:border-[#D400D9]"></input>
        </div>
        <div className="flex justify-center mt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email" className="px-4 py-2 rounded-xl border border-[#D400D9] focus:outline-none focus:border-[#D400D9]"></input>
        </div>
        <div className="flex justify-center mt-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password" className="px-4 py-2 rounded-xl border border-[#D400D9] focus:outline-none focus:border-[#D400D9] m-auto"></input>
        </div>
        
        <div onClick={handleSubmit} className="flex justify-center mt-4">
          <button className="bg-[#9900CE] opacity-60 text-white font-bold py-2 px-4 rounded-xl w-80">
            Sign Up
          </button>
        </div>

        
          <div className="mt-1">
            <span className="font-bold text-lg text-red-600">{errorMessage}</span>
            
          </div>

          <div className="mt-0">
            <span className="font-normal text-sm">Already have an account,</span>
            <Link to="/home/signin"><span className="text-sm font-bold cursor-pointer">Sign in here.</span></Link>  
          </div>
       

      </div>
    </div>
  );
}

export default SignUpPage;
