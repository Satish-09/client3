import React from "react";

const UserForm = () => {
  const [formState, setFormState] = React.useState({ email: "", password: "" });
  const { email, password } = formState;
 
  const handleChange =(e)=>{
    let value= e.target.value;
    let name= e.target.name;
    setFormState((prev)=>({...prev,[name]:value}));

  }
  React.useEffect(() =>{
    const formS=JSON.parse(localStorage.getItem("user"));
    if(email === "" &&password === "")
     setFormState(prev=>({...prev, ...formS}));
  
  }, []);

  React.useEffect(() => {
  localStorage.setItem("user",JSON.stringify(formState));
  }, [email,password]);
  return (
    <div>
      <form>
      <label>Email</label>
        <input
         name="email"
          type="email"
          placeholder="email"
          onChange={handleChange}
          value={email}
        />
<br/>
<label>password</label>
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={handleChange}
          value={password}
        />
        <br/>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default UserForm;
