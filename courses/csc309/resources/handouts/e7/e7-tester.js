const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");
const htmlPath = path.resolve(process.argv[2] || "index.html");

// Check if the path exists
if (!fs.existsSync(htmlPath)) {
  console.error(`❌ Error: The file "${htmlPath}" does not exist..`);
  console.error(`Unable to run tests`);
  process.exit(1); // Exit the script with an error code
}

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto(`file://${htmlPath}`);

  let testResults = [];
  let passedTests = 0;
  let failedTests = 0;

  function assert(condition, message) {
    if (condition) {
      testResults.push(`✅  ${message}`);
      passedTests++;
    } else {
      testResults.push(`❌  ${message}`);
      failedTests++;
    }
  }

  async function elementExists(selector) {
    const element = await page.$(selector);
    return element !== null;
  }

  async function runTests() {
    testResults.push("Running Tests...\n");

    // Test 1: Render conversion type dropdown with default value
    if (await elementExists("#conversion-type")) {
      let conversionType = await page.$eval(
        "#conversion-type",
        (el) => el.value
      );
      assert(
        ["Length", "Weight", "Area", "Temperature"].includes(conversionType),
        `Test 1: Expected "Length", "Weight", "Area", or "Temperature". Got "${conversionType}".`
      );
    } else {
      assert(false, "Test 1: #conversion-type element does not exist.");
    }

    // Test 2: update units when conversion type changes
    if (
      (await elementExists("#conversion-type")) &&
      (await elementExists("#lhs-unit"))
    ) {
      await page.select("#conversion-type", "Weight");
      let inputUnit = await page.$eval("#lhs-unit", (el) => el.value);
      assert(
        inputUnit === "Kilogram",
        `Test 2a: Expected "Kilogram". Got "${inputUnit}".`
      );

      await page.select("#conversion-type", "Area");
      inputUnit = await page.$eval("#lhs-unit", (el) => el.value);
      assert(
        inputUnit === "Square Meter",
        `Test 2b: Expected "Square Meter". Got "${inputUnit}".`
      );
    } else {
      assert(
        false,
        "Test 2: #conversion-type or #lhs-unit element does not exist."
      );
    }

    // Test 3: Calculate rhs correctly for length conversion
    if (
      (await elementExists("#lhs-input")) &&
      (await elementExists("#rhs-input"))
    ) {
      await page.select("#conversion-type", "Length");
      await page.select("#lhs-unit", "Meter");
      await page.select("#rhs-unit", "Feet");
      await page.type("#lhs-input", "1");
      let rhsValue = parseFloat(
        await page.$eval("#rhs-input", (el) => el.value)
      ).toFixed(2);
      assert(
        rhsValue === "3.28",
        `Test 3: Expected "3.28". Got "${rhsValue}".`
      );
    } else {
      assert(false, "Test 3: #lhs-input or #rhs-input element does not exist.");
    }

    // Test 4: Filter rhs unit options based on input unit
    if (await elementExists("#lhs-unit")) {
      await page.select("#lhs-unit", "Feet");
      const rhsUnitOptions = await page.$$eval("#rhs-unit option", (options) =>
        options.map((option) => option.value)
      );
      assert(
        !rhsUnitOptions.includes("Feet"),
        `Test 4: Expected "Feet" not to be in rhs unit options, but it was.`
      );
    } else {
      assert(false, "Test 4: #lhs-unit element does not exist.");
    }

    // Test 5: Calculate lhs correctly for area conversion
    if (
      (await elementExists("#lhs-input")) &&
      (await elementExists("#rhs-input"))
    ) {
      await page.select("#conversion-type", "Area");
      await page.select("#rhs-unit", "Square Feet");
      await page.select("#lhs-unit", "Square Meter");
      await page.type("#rhs-input", "500");
      let rhsValue = parseFloat(
        await page.$eval("#lhs-input", (el) => el.value)
      ).toFixed(2);
      assert(
        rhsValue === "46.45",
        `Test 5: Expected "46.45". Got "${rhsValue}".`
      );
    } else {
      assert(false, "Test 5: #lhs-input or #rhs-input element does not exist.");
    }

    // Test 6: Ensure Input Field is Cleared After Changing Conversion Type
    if (
      (await elementExists("#conversion-type")) &&
      (await elementExists("#lhs-input"))
    ) {
      await page.select("#conversion-type", "Temperature");
      let lhsValue = await page.$eval("#lhs-input", (el) => el.value);
      let rhsValue = await page.$eval("#rhs-input", (el) => el.value);
      assert(
        lhsValue === "" && rhsValue === "",
        `Test 6: Expected input fields to be cleared after conversion type change. Got "${lhsValue}" and "${rhsValue}".`
      );
    } else {
      assert(
        false,
        "Test 6: #conversion-type or #lhs-input element does not exist."
      );
    }

    // Test 7: Chain Multiple Interactions
    if (
      (await elementExists("#conversion-type")) &&
      (await elementExists("#lhs-input")) &&
      (await elementExists("#rhs-input"))
    ) {
      // Set to Weight conversion, input 10 kg, check the output
      await page.select("#conversion-type", "Weight");
      await page.select("#lhs-unit", "Kilograms");
      await page.select("#rhs-unit", "Pounds");
      await page.type("#lhs-input", "10");
      let outputValue = parseFloat(
        await page.$eval("#rhs-input", (el) => el.value)
      ).toFixed(2);
      assert(
        outputValue === "22.05",
        `Test 7a: Expected "22.05", but got "${outputValue}"`
      );

      // Change to Area conversion, input 1 sq meter, check the output
      await page.select("#conversion-type", "Area");
      await page.select("#lhs-unit", "Square Feet");
      await page.select("#rhs-unit", "Square Meter");
      await page.click("#lhs-input", { clickCount: 3 });
      await page.type("#rhs-input", "1");
      outputValue = parseFloat(
        await page.$eval("#lhs-input", (el) => el.value)
      ).toFixed(2);
      assert(
        outputValue === "10.76",
        `Test 7b: Expected "10.76", but got "${outputValue}"`
      );

      // Revert back to Length conversion, input 5 meter, check the output
      await page.select("#conversion-type", "Length");
      await page.select("#lhs-unit", "Meter");
      await page.select("#rhs-unit", "Feet");
      await page.click("#lhs-input", { clickCount: 3 });
      await page.type("#lhs-input", "5");
      outputValue = parseFloat(
        await page.$eval("#rhs-input", (el) => el.value)
      ).toFixed(2);
      assert(
        outputValue === "16.40",
        `Test 7c: Expected "16.40", but got "${outputValue}"`
      );
    } else {
      assert(false, "Test 7: One or more required elements do not exist");
    }
  }

  await runTests();

  await browser.close();

  // Print all test results
  console.log(testResults.join("\n"));
  console.log("\nFinal test results:");
  console.log(`Total passed: ${passedTests}`);
  console.log(`Total failed: ${failedTests}`);
  if (failedTests > 0) {
    process.exit(1); // Exit with an error code
  } else {
    console.log("🎉 All tests passed! Congratulations!");
  }
})();
