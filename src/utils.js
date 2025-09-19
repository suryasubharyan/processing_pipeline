const fs = require("fs");

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function logBenchmark(label, time) {
  fs.appendFileSync("./benchmarks/results.log", `${label}: ${time}ms\n`);
}

module.exports = { isValidEmail, logBenchmark };
