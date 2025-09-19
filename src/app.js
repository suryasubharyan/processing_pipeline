#!/usr/bin/env node
const { program } = require("commander");
const { readJSON, writeJSON } = require("./fileHandler");
const { cleanData } = require("./dataCleaner");
const { generateStats } = require("./statsGenerator");
const { logBenchmark } = require("./utils");

program
  .name("json-cleaner-stats")
  .description("CLI tool to clean JSON data and generate statistics")
  .version("1.0.0");

program
  .command("clean")
  .description("Clean dataset and save to output.json")
  .option("-i, --input <file>", "Input JSON file", "./data/input.json")
  .option("-o, --output <file>", "Output JSON file", "./data/output.json")
  .action((options) => {
    console.time("clean");
    try {
      const data = readJSON(options.input);
      const cleaned = cleanData(data);
      writeJSON(options.output, cleaned);
      console.log("✅ Cleaned data saved to", options.output);
    } catch (err) {
      console.error("❌ Error:", err.message);
    }
    console.timeEnd("clean");
    logBenchmark("clean", performance.now());
  });

program
  .command("stats")
  .description("Generate statistics from dataset")
  .option("-i, --input <file>", "Input JSON file", "./data/output.json")
  .option("-t, --topCities <n>", "Show top N cities", "5")
  .action((options) => {
    console.time("stats");
    try {
      const data = readJSON(options.input);
      const stats = generateStats(data, parseInt(options.topCities, 10));
      console.log("\n--- Stats Report ---");
      console.log("Valid users:", stats.validUsers);
      console.table(stats.domains);
      console.table(stats.topCities);
    } catch (err) {
      console.error("❌ Error:", err.message);
    }
    console.timeEnd("stats");
    logBenchmark("stats", performance.now());
  });

program
  .command("all")
  .description("Clean and generate stats together")
  .option("-i, --input <file>", "Input JSON file", "./data/input.json")
  .option("-o, --output <file>", "Output JSON file", "./data/output.json")
  .option("-t, --topCities <n>", "Show top N cities", "5")
  .action((options) => {
    console.time("all");
    try {
      const raw = readJSON(options.input);
      const cleaned = cleanData(raw);
      writeJSON(options.output, cleaned);
      console.log("✅ Cleaned data saved to", options.output);

      const stats = generateStats(cleaned, parseInt(options.topCities, 10));
      console.log("\n--- Full Report ---");
      console.log("Valid users:", stats.validUsers);
      console.table(stats.domains);
      console.table(stats.topCities);
    } catch (err) {
      console.error("❌ Error:", err.message);
    }
    console.timeEnd("all");
    logBenchmark("all", performance.now());
  });

program.parse(process.argv);
