import z from "zod";
export const RegisterSchema=z.object({
  name:z.string().min(3,"Name must contain at least 3 characters"),
  email:z.string().email("Enter a valid email"),
  password:z.string().min(8,"Password must contain at least 8 characters"),
  age:z.coerce.number().min(18,"Age should be at least 18"),
  role:z.enum(["trader","operator"]),
});