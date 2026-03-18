import { body } from "express-validator";

const userRegisterValidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email is invalid")
      .normalizeEmail(),

    body("username")
      .trim()
      .notEmpty()
      .withMessage("Username is required")
      .isLowercase()
      .withMessage("Username must be in lowercase")
      .isLength({ min: 3, max: 20 })
      .withMessage("Username must be 3-20 charecters long")
      .matches(/^[a-zA-Z0-9_]+$/)
      .withMessage(
        "Username can only contain letters, numbers, and underscores",
      ),

    body("password")
      .trim()
      .notEmpty()
      .withMessage("Password must not be empty")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters")
      .matches(/^(?=.*[A-Za-z])(?=.*\d)/)
      .withMessage("Password must contain letters and numbers"),

    body("fullName")
      .trim()
      .notEmpty()
      .withMessage("FullName is required")
      .isLength({ min: 2, max: 50 })
      .withMessage("Full name must be 2-50 characters")
      .matches(/^[a-zA-Z\s]+$/)
      .withMessage("Name can only contain letters and spaces"),
  ];
};

const userLoginValidator = () => {
  return [
    body("email")
      .optional()
      .trim()
      .isEmail()
      .withMessage("Email is invalid"),

    body("username")
      .optional()
      .trim()
      .isLowercase()
      .withMessage("Username must be lowercase")
      .isLength({ min: 3 })
      .withMessage("Username must be at least 3 characters long"),

    body("password")
      .trim()
      .notEmpty()
      .withMessage("Password is required"),

    body().custom((value, { req }) => {
      if (!req.body.email && !req.body.username) {
        throw new Error("Email or Username is required");
      }
      return true;
    }),
  ];
};

export { userRegisterValidator, userLoginValidator };
