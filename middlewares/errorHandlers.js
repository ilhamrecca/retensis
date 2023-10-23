module.exports = (error, req, res, next) => {
  let status = 500;
  let message = error.name;
  // console.log(message);
  switch (error.name) {
    case "SequelizeValidationError":
    case "SequelizeDatabaseError":
    case "Please check your credential":
      message = "Please check input data";
      status = 400;
      break;
    case "SequelizeUniqueConstraintError":
      status = 400;
      message = "Duplicate Data Entry";
      break;
    case "Unauthenticated Access":
    case "Invalid token":
    case "access_token is required":
    case "Invalid Signature":
      status = 401;
      message = "Unauthorized access, Please try Reloggin into your account";
      break;
    case "Unauthorized Access":
      status = 403;
      message = "You don't have permission to access this resource.";
      break;
    case "News not found":
      status = 404;
      break;

    default:
      status = 500;
  }
  if (status == 500) {
    message = "Internal Server Error";
  }
  res.status(status).send({ success: false, message });
};
