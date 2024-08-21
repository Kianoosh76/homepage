const path = require("path");
const fs = require("fs");
const scriptsPath = path.resolve(process.argv[2] || "scripts.js");

// Check if the path exists
if (!fs.existsSync(scriptsPath)) {
  console.error(`❌ Error: The file "${scriptsPath}" does not exist.`);
  console.error(`Unable to run tests`);
  process.exit(1); // Exit the script with an error code
}

const {
  fetchData,
  fetchSequentialData,
  fetchAllData,
  fetchSequentialDataAsync,
} = require(scriptsPath);

let passedCount = 0;
let failedCount = 0;

function logSuccess(message) {
  console.log(`✅ ${message}`);
  passedCount++;
}

function logFailure(message) {
  console.error(`❌ ${message}`);
  failedCount++;
}

const urls = [
  "http://example.com",
  "https://jsonplaceholder.typicode.com/todos/1",
  "invalid-url",
];

// Check if the functions are defined
function checkFunctionDefined(func, funcName) {
  if (typeof func !== "function") {
    logFailure(`${funcName} is not defined. Did you forget to export them?`);
    return false;
  }
  return true;
}

// Test function for fetchData
async function testFetchData() {
  if (!checkFunctionDefined(fetchData, "fetchData")) return;

  console.log("\nTesting fetchData...");
  try {
    const result = await fetchData(urls[0]);
    if (typeof result === "object") {
      logSuccess("fetchData passed with valid URL");
    } else {
      logFailure(
        `fetchData failed with valid URL -- invalid type returned: ${typeof result}`
      );
    }
  } catch (error) {
    logFailure("fetchData failed with valid URL. It crashed!");
  }

  try {
    await fetchData(urls[2]);
    logFailure("fetchData failed: Expected an error for invalid URL");
  } catch (error) {
    logSuccess("fetchData passed with invalid URL.");
  }
}

// Test function for fetchSequentialData
async function testFetchSequentialData() {
  if (!checkFunctionDefined(fetchSequentialData, "fetchSequentialData")) return;

  console.log("\nTesting fetchSequentialData...");
  try {
    const response = await fetchSequentialData([urls[0], urls[1]]);
    if (response.length === 2) {
      logSuccess("fetchSequentialData passed with valid URLs");
    } else {
      logFailure(
        "fetchSequentialData failed with valid URLs: Expected 2 items, found " +
          response.length
      );
    }
  } catch (error) {
    logFailure("fetchSequentialData failed with valid URLs: It crashed!");
  }

  try {
    const response = await fetchSequentialData([urls[0], urls[2]]);
    logSuccess("fetchSequentialData passed with invalid URL");
  } catch (error) {
    logFailure(
      "fetchSequentialData did not handle invalid URL gracefully. It crashed!"
    );
  }
}

// Test function for fetchAllData
async function testFetchAllData() {
  if (!checkFunctionDefined(fetchAllData, "fetchAllData")) return;

  console.log("\nTesting fetchAllData...");
  try {
    const response = await fetchAllData([urls[0], urls[1]]);
    if (response.length === 2) {
      logSuccess("fetchAllData passed with valid URLs");
    } else {
      logFailure(
        "fetchAllData failed with valid URLs: Expected 2 items, found " +
          response.length
      );
    }
  } catch (error) {
    logFailure("fetchAllData failed with valid URLs");
  }

  try {
    const response = await fetchAllData([urls[0], urls[2]]);
    logSuccess("fetchAllData passed with invalid URL");
  } catch (error) {
    logFailure(
      "fetchAllData did not handle invalid URL gracefully. It crashed!"
    );
  }
}

// Test function for fetchSequentialDataAsync
async function testFetchSequentialDataAsync() {
  if (
    !checkFunctionDefined(fetchSequentialDataAsync, "fetchSequentialDataAsync")
  )
    return;

  console.log("\nTesting fetchSequentialDataAsync...");
  try {
    await fetchSequentialDataAsync([urls[0], urls[1]]);
    logSuccess("fetchSequentialDataAsync passed with valid URLs");
  } catch (error) {
    logFailure("fetchSequentialDataAsync failed with valid URLs");
  }

  try {
    await fetchSequentialDataAsync([urls[0], urls[2]]);
    logSuccess("fetchSequentialDataAsync passed with invalid URL");
  } catch (error) {
    logFailure(
      "fetchSequentialDataAsync did not handle invalid URL gracefully. It crashed!"
    );
  }
}

// Run all tests
async function runTests() {
  await testFetchData();
  await testFetchSequentialData();
  await testFetchAllData();
  await testFetchSequentialDataAsync();

  console.log("\nTest results:");
  console.log(`Passed: ${passedCount}`);
  console.log(`Failed: ${failedCount}`);

  if (failedCount === 0) {
    console.log(`🎉 All passed! Great job!`);
  }
}

runTests();
