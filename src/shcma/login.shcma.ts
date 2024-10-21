import { z } from "zod";

const loginvalidation = z.object({
  email: z.string().trim().email("please Enter your Email"),
  password: z.string().trim().min(6, "at least 6 charetr"),
});

export default loginvalidation;
