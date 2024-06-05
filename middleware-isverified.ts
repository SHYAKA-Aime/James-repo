
// import { generateToken } from "../utils/tokenGenerator.utils";
// import { UserService } from "../services/user.services";
// import { sendEmail } from "../utils/email.utils";



// export const isVerfied = (req: Request, res: Response, next: NextFunction) => {
//   try {
//     let token;
//     if (!req.headers.authorization) {
//       return res.status(401).json({ message: "Authorization header missing" });
//     }
//     token = req.headers.authorization.split(" ")[1];
//     const jwt_secret: string | undefined = process.env.JWT_SECRET;
//     if (!jwt_secret) {
//       return res.status(401).json({ message: "JWT_SECRET is missing" });
//     }
//     jwt.verify(token, jwt_secret, async (err, decoded) => {
//       if (err) {
//         return res.status(401).json({ message: "Unauthorized request, Try again" });
//       } else {
//         const userId = (decoded as JwtPayload).id;
//         const user = await UserService.getUserByid(userId); // Assuming the token contains the user ID

//         if (!user) {
//           return res.status(404).json({ message:"User not found" });
//         }

//         if (!user.verified) {
//           const token = await generateToken(user, "1h");

//           const verificationLink = `${process.env.FRONTEND_URL}/api/users/verify-email?token=${token}`;
//           const subject = "Email Verification";
//           const text = `Please verify your email by clicking on the following link:${verificationLink}`;
//           const html = `<p>Please verify your email by clicking on the following link:</p><a href="${verificationLink}">Verify Email</a>`;
//           sendEmail(user.email, subject, text, html);
//           return res.status(403).json({
//             message: "This user is not vrified, Check your Email and verify email first",
//           });
//         }

//         req.user = user;
//         next();
//       }
//     });
//   } catch (err) {
//     console.log(err, "Error occurred");
//     return res.status(500).json({ message: "Internal Server Error" });
//   }
// };
