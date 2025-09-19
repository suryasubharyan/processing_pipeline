const { isValidEmail } = require("./utils");

function cleanData(data) {
  if (!Array.isArray(data)) {
    throw new Error("Input data must be an array");
  }

  return data
    .filter((user) => user.name && user.email && user.address)
    .filter((user) => isValidEmail(user.email))
    .map((user) => {
      const [firstName, ...lastParts] = user.name.trim().split(" ");
      return {
        firstName,
        lastName: lastParts.join(" "),
        email: user.email.trim().toLowerCase(),
        address: user.address.trim(),
      };
    });
}

module.exports = { cleanData };
