const fs = require("fs");

function readJSON(filePath) {
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    throw new Error(`Error reading JSON from ${filePath}: ${err.message}`);
  }
}

function writeJSON(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`✅ File written to ${filePath}`);
  } catch (err) {
    throw new Error(`Error writing JSON to ${filePath}: ${err.message}`);
  }
}

module.exports = { readJSON, writeJSON };
