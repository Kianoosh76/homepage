// Load the student's script
const { getAppUrl, getUTorId } = require("./scripts.js");

function isValidAppUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}

async function runAutoTester() {
  try {
    if (typeof getAppUrl !== "function" || typeof getUTorId !== "function") {
      throw new Error(
        "The required functions are not exported from the script."
      );
    }

    // Get the app URL and UTorID from the student's script
    const appUrl = getAppUrl();
    const uTorId = getUTorId();

    // Validate that the app URL and UTorID are provided
    if (!appUrl || !uTorId) {
      throw new Error("App URL or UTorID is missing in the provided script.");
    }

    // Validate the format of the app URL
    if (!isValidAppUrl(appUrl)) {
      throw new Error(
        `The app URL (${appUrl}) should not include a port or subpath.`
      );
    }

    // Make a request to the deployed application
    const response = await fetch(appUrl);

    // Check if the response status is 200 OK
    if (response.status !== 200) {
      throw new Error(
        `Expected status 200, but got ${response.status} from ${appUrl}/csc309-e11`
      );
    }

    // Extract the content
    const content = await response.text();

    const expectedContent = `Hi. I am ${uTorId}, and I have learned how to deploy a serverless app!`;

    if (content === expectedContent) {
      console.log(
        "🎉 Auto-tester passed: Return value matches the expected output!"
      );
      process.exit(0);
    } else {
      console.log(
        "❌ Auto-tester failed: Return value does not matches the expected output."
      );
      console.log(`Received: ${content}`);
      console.log(`Expected: ${expectedContent}`);
    }
  } catch (error) {
    console.log("❌ Auto-tester failed:", error.message);
  } finally {
    process.exit(1);
  }
}

runAutoTester();
