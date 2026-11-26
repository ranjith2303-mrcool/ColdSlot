import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "../components/Formschema/RegisterSchema";
function Register() {
  const navigate = useNavigate();
  const {register,handleSubmit,formState: { errors },} = useForm({
    resolver: zodResolver(Registerschema),
  });
  function onSubmit(data) {console.log(data);
    alert("Register Success"); 
    navigate("/login");
}
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Register</h2>

      <label htmlFor="name">Name</label>
      <input id="name"type="text" placeholder="Enter your name"{...register("name")}/>
      <p>{errors.name?.message}</p>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" placeholder="Enter your email" {...register("email")}/>
      <p>{errors.email?.message}</p>
      <label htmlFor="password">Password</label>
      <input id="password" type="password" placeholder="Enter your password"{...register("password")} />
      <p>{errors.password?.message}</p>
      <label htmlFor="age">Age</label>
      <input id="age" type="number" placeholder="Enter your age" {...register("age")} />
      <p>{errors.age?.message}</p>
      <label htmlFor="role">Register as</label>
      <label>
        <input type="radio" value="trader" {...register("role")} />Trader</label>
      <label>
        <input type="radio" value="operator" {...register("role")} />Operator</label>
      <p>{errors.role?.message}</p>
      <button type="submit">Submit</button>
    </form>
  );
}
export default Register;