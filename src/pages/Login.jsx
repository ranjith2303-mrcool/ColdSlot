import { LoginSchema } from "../components/Formschema/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const {register,handleSubmit,formState: { errors },} = useForm({
    resolver: zodResolver(LoginSchema),
  });
  function onSubmit(data) {
    console.log(data);
    alert("Login Success");
    navigate("/admin");
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
       <h2>Login</h2>
       <label htmlFor="email">Email</label>
       <input id="email" type="email" placeholder="Enter your email" {...register("email")} />
       <p>{errors.email?.message}</p>
       <label htmlFor="password">Password</label>
       <input id="password" type="password" placeholder="Enter your password" {...register("password")} />
       <p>{errors.password?.message}</p>
       <button type="submit">Login</button>
    </form>
   );
}
export default Login;