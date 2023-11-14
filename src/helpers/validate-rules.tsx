const validateRules = {
  firstName: {
    RegExp: /^[a-zA-Z\s]+$/,
    message: "First name should contain only letters",
  },
  lastName: {
    RegExp: /^[a-zA-Z\s]+$/,
    message: "Last name should contain only letters",
  },
  email: {
    RegExp: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    message: "Email is not valid",
  },
  password: {
    RegExp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    message:
      "Password should contain at least 8 characters, one uppercase, one lowercase and one number",
  },
  confirmPassword: {
    RegExp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    message:
      "Password should contain at least 8 characters, one uppercase, one lowercase and one number",
  },

  billingAddress_number: {
    RegExp: /^[0-9]+$/,
    message: "Number should contain only numbers",
  },

  billingAddress_address: {
    RegExp: /^[a-zA-Z0-9\s,'-]*$/,
    message:
      "Address should contain only letters, numbers and special characters: , ' -",
  },

  deliveryAddress_number: {
    RegExp: /^[0-9]+$/,
    message: "Number should contain only numbers",
  },

  deliveryAddress_address: {
    RegExp: /^[a-zA-Z0-9\s,'-]*$/,
    message:
      "Address should contain only letters, numbers and special characters: , ' -",
  },
};

const getValidateRules = (name: string) => {
  return validateRules[name];
};

export default getValidateRules;
