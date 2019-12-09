const errorMessages = {
  firstName: {
    "0": "First name is required",
    short: "First name must be 2 characters or more",
    long: "First name must be 12 characters or less"
  },
  lastName: {
    "0": "Last name is required",
    short: "Last name must be 2 characters or more",
    long: "Last name must be 12 characters or less"
  },
  phone: {
    "0": "Phone number is required",
    invalid: "Phone number isn't valid"
  },
  email: {
    "0": "Email address is required",
    invalid: "Email isn't valid"
  },
  amount: {
    0: "Select an amount"
  },
  confirmEmail: {
    "0": "Confirm email address",
    noMatch: "Email addresses must match"
  },
  password: {
    "0": "Password is required",
    short: "Password must me 8 characters or more"
  },
  confirmPassword: {
    "0": "Confirm password",
    noMatch: "Passwords must match"
  },
  terms: {
    "0": "You must agree to terms of service"
  }
};

export const validate = (values, dontValidate, specialValidation) => {
  const errors = {};
  const emailRegex = /^([0-9a-zA-Z]([-\.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
  const phoneRegex = /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/;

  const toValidate = Object.keys(values).filter(
    key => !dontValidate.includes(key)
  );
  const general = toValidate.filter(key => !specialValidation.includes(key));
  const special = toValidate.filter(key => specialValidation.includes(key));

  general.forEach(key => {
    switch (typeof values[key]) {
      case "string":
        if (values[key].length === 0) {
          errors[key] = errorMessages[key][0];
          break;
        }
        if (values[key].length < 2) {
          errors[key] = errorMessages[key].short;
          break;
        } else if (values[key].length > 12) {
          errors[key] = errorMessages[key].long;
          break;
        }
        break;
      case "boolean":
        if (values[key] === false) {
          errors[key] = errorMessages[key]["0"];
        }
        break;
      default:
        break;
    }
  });
  special.forEach(key => {
    switch (key) {
      case "phone":
        if (values[key].length === 0) {
          errors[key] = errorMessages[key][0];
          break;
        }
        if (phoneRegex.test(values[key])) {
          break;
        } else {
          errors[key] = errorMessages[key].invalid;
          break;
        }
      case "email":
        if (values[key].length === 0) {
          errors[key] = errorMessages[key][0];
          break;
        }
        if (emailRegex.test(values[key])) {
          break;
        } else {
          errors[key] = errorMessages[key].invalid;
          break;
        }
      case "confirmEmail":
        if (values[key].length === 0) {
          errors[key] = errorMessages[key][0];
          break;
        } else if (values[key] === values.email) break;
        else {
          errors[key] = errorMessages[key].noMatch;
        }
        break;
      case "password":
        if (values[key].length === 0) {
          errors[key] = errorMessages[key][0];
          break;
        } else if (values[key].length < 8) {
          errors[key] = errorMessages[key].short;
          break;
        }
        break;
      case "confirmPassword":
        if (values[key].length === 0) {
          errors[key] = errorMessages[key][0];
          break;
        } else if (values[key] != values.password) {
          errors[key] = errorMessages[key].noMatch;
          break;
        }
        break;
      default:
        break;
    }
  });

  return errors;
};
