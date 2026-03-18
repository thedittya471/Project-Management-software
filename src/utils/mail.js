import Mailgen from "mailgen";

const emailVerificationMailgenContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to out App! We are excited to have you on board",
      action: {
        instructions:
          "To verify your email please click on the following button",
        button: {
          color: "#22BC66",
          text: "Verify Now",
          link: verificationUrl,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we would love to help",
    },
  };
};

const passwordResetMailgenContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro: "We got a request to reset the password of your account",
      action: {
        instructions: "To reset your password click on the following button",
        button: {
          color: "#e72f1a",
          text: "Reset Password",
          link: passwordResetUrl,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we would love to help",
    },
  };
};

export { emailVerificationMailgenContent, passwordResetMailgenContent };
