import * as z from "zod";

// ============================================================
// USER
// ============================================================
export const SignupValidation = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  username: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().refine((value) => {
    // Define the allowed domain
    const allowedDomain = 'lpu.in';

    // Define the required format using a regular expression
    const emailFormat = /^[0-9]{8}\.[a-zA-Z]+@lpu\.in$/;

    // Check if the email matches the required format and domain
    return emailFormat.test(value) && value.endsWith(allowedDomain);
  }, { message: "Invalid email address or domain." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
});

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
});
export const ProfileValidation = z.object({
  file: z.custom<File[]>(),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  username: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email(),
  bio: z.string(),
});

// ============================================================
// POST
// ============================================================
export const PostValidation = z.object({
  caption: z.string().min(5, { message: "Minimum 5 characters." }).max(2200, { message: "Maximum 2,200 caracters" }),
  file: z.custom<File[]>(), 
  tags: z.string(),
});


// ============================================================
// Market POST
// ============================================================
export const MarketValidation = z.object({
  caption: z.string().min(5, { message: "Minimum 5 characters." }).max(2200, { message: "Maximum 2,200 caracters" }), 
  file: z.custom<File[]>(),
  price: z.string().min(2, { message: "Minimum 5 characters." }).max(2200, { message: "Maximum 2,200 caracters" }),
 
 
});