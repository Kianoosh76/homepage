## UNIVERSITY OF TORONTO

## MIDTERM EXAMINATION (GROUP A) -- SOLUTIONS

### CSC309 -- Programming on the Web

**Instructor:** Kia Abbasi  
**Date:** Oct 1st, 2024  
**Duration:** 100 minutes  
**Examination Aids:** One piece of double-sided hand-written letter

<div style="padding: 40px"></div>

| **To be filled by student**                                                                                                                                                                                                                                                                                                                                                                                                                                                  |     |     | **To be filled by grader**                                                                                                                                                                                                            | **Group**                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| **Student Number:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ <br> **UtorID:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ <br><br> **Family Name:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_<br> **Given Name:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |     |     | **#1:** /20 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_<br> **#2:** /25 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_<br> **#3:** /25 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_<br> **#4:** /30 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_<br> <br> **SUM:** /100 \_\_\_\_\_\_\_\_\_\_\_ | <img src="./midterm_A_sol/a.png" width="150" height="180"> |

---

### _Do not turn this page until you have received the signal to start. In the meantime, please read the instructions on this page carefully._

---

University of Toronto and you, as a student, share a commitment to academic integrity. You are reminded that you may be charged with an academic offense for possessing any unauthorized aids during the writing of an exam.

Unauthorized aids include, but are not limited to: cell phones, smart watches, smart glasses, tablets, laptops, desktops, calculators of any kind, headsets or earphones (visible or invisible), microphones, walkie talkies, GPS trackers, radars, gaming consoles, electronic readers, electronic pens, wireless erasers, laser or infrared sensors, cameras, carbon papers, and flashlights.

Please turn off all such devices, seal them in your backpack, and place it under your desk for the duration of the examination. You will not be able to touch the bag or its contents until the exam is over.

If, during an exam, any of these items are found on your person or in the area of your desk other than in the clear, sealable, plastic bag, you may be charged with an academic offense. A typical penalty for an academic offense may cause you to fail the course.

Please note that once this exam has begun, you cannot rewrite it.

This exam contains **4 questions** across **12 pages** (including this one). Please write your answers in the space provided immediately following each question. If you need more space, use the blank pages at the end of the booklet. However, write a clear note at the end of the current space.

<div style="page-break-after: always;"></div>

# **Question 1: Concepts** [20 marks]

---

In each part, you are given a statement about concepts in web development. Indicate whether each statement is true or false. In both cases, provide a brief explanation about your choice. Avoid writing detailed or lengthy explanations.

## **Part (a)** [2 marks]

HTML is a protocol for transferring data between a client and a server, while HTTP is a programming language that dictates how programmers describe and format a web page.

```

False -- HTML is a markup language, not a protocol, and HTTP is a protocol, not a programming language.


```

## **Part (b)** [2 marks]

JavaScript does not have a real type system, meaning that every variable is of type `object`, and it can have any set of attributes at any time.

```

False -- JavaScript has a dynamic type system with primitives and objects, not all variables are objects.


```

## **Part (c)** [2 marks]

When you download a web browser, you also install a Node.js engine that is a built-in part of the browser.

```

False -- Browsers have their own JavaScript engines, not Node.js.



```

## **Part (d)** [2 marks]

The reason GET query params (`e.g./?id=12`) are appended at the end of the URL is that they are used as API calls.

```

False -- GET query parameters are used for passing data in URLs for queries and searches. They are not exclusively used for API calls.


```

## **Part (e)** [2 marks]

A client's communication with a web server depends on whether the server is run by Node.js, Python, or another platform.

```

False -- Client-server communication does not depend on the server’s platform (Node.js, Python, etc.).


```

## **Part (f)** [2 marks]

You can use JavaScript to modify the content of an HTML element, but you cannot use it to modify how it looks like -- that ability is exclusive to CSS.

```

False -- JavaScript can modify both content and appearance of HTML elements via the DOM.



```

## **Part (g)** [2 marks]

The biggest advantage of using a backend framework instead of writing the server code from scratch is that the framework supports a wide range of client devices, such as web browsers, mobile apps, smart watches, etc.

```

False -- The main advantage of a backend framework is simplifying common functionalities, not device support.


```

## **Part (h)** [2 marks]

Using the `POST` method to transmit user data from the browser to the server ensures end-to-end security, meaning no one other than the client and server can access the potentially sensitive data.

```

False -- Using POST does not guarantee end-to-end security; encryption like HTTPS is needed.


```

## **Part (i)** [2 marks]

Training a machine learning model could be significantly faster if it is run through the event loop using async programming techniques.

```

False -- Async programming won't significantly speed up CPU-bound tasks like machine learning. It will only speed up IO-bound tasks.



```

## **Part (j)** [2 marks]

In an async context, the code that immediately follows `await sleep(3000)` is guaranteed to be the first logic that the event loop will execute after a 3000-millisecond wait.

```
False -- await sleep(3000) does not guarantee that the next logic will be the first to execute after the wait. After 3000 milliseconds, it will be pushed to the end of event queue, and get executed once the event loop finishes processing the other codes that were already in the queue.


```

<div style="page-break-after: always;"></div>

# **Question 2: A JavaScript snippet** [25 marks]

---

Given the below piece of JavaScript code, answer the following questions. Assume that the below piece runs without any errors in the browser's _Console_ tab, inside the Inspect Element panel.

```javascript
const obj = {
  firstName: "Eren",
  lastName: "Jaegar",
  getName() {
    console.log(this.firstName);
  },
  getNameArrow: () => {
    console.log(this.firstName);
  },
  getNameWithDelay: function () {
    setTimeout(function () {
      console.log(this.firstName);
    }, 100);
  },
  getNameWithVariableDelay: function (delay) {
    setTimeout(function () {
      console.log(this.firstName);
    }, delay);
  },
};
```

## **Part (a)** [2 marks]

If we try to access `obj.age`, what will happen? Will the code crash, or will it return something? If so, what will it return? Explain your answer.

```
Accessing obj.age will not cause the code to crash [1 mark]. It will return undefined [1 marks].


```

## **Part (b)** [3 marks]

Imagine we run `obj.performance = null`. Is it allowed to add properties to `obj` after its creation? If so, what will be the output of `typeof(obj.performance)`? Explain your answer.

```
Yes, it is allowed to add properties to obj after its creation [1 marks]. The output of typeof(obj.performance) will be "object" because null is treated as an object in JavaScript [2 marks].



```

## **Part (c)** [4 marks]

What will be printed to the console when calling `obj.getName()` and `obj.getNameArrow()`? Do both functions output the same value? Explain why or why not.

```
obj.getName() will print "Eren" [1 mark] to the console because this refers to the obj object, which contains the firstName property [1 mark].
obj.getNameArrow() will print undefined [1 mark] because arrow functions do not have their own this context. In this case, this refers to window, which does not have a firstName property [1 mark].



```

## **Part (d)** [4 marks]

What happens when you call `obj.getNameWithDelay()`? What will be printed to the console? Explain how the behavior of `this` affects the output.

```
When calling obj.getNameWithDelay(), the setTimeout function runs after at least 100 milliseconds [1 mark]. Since the setTimeout callback is a regular function, this refers its caller, in this case window (because there will be no caller object) [2 mark]. Therefore, this.firstName is undefined, and undefined will be printed to the console [1 mark].



```

## **Part (e)** [4 marks]

Will the code crash after calling `obj.getNameWithVariableDelay()`? What does it depend on? Explain your answer with respect to the behavior of the `setTimeout` function.

```
If the function is called without providing an argument, the value of delay becomes undefined [1 marks]. Therefore, setTimeout is called with just one argument, and whether or not the code crash depends on if that function crashes when called with only one argument instead of two [3 marks].




```

## **Part (f)** [8 marks]

The function `getNameWithVariableDelay` implicitly assumes that the `delay` parameter is always a number. However, is there a way to enforce that assumption? Explain at least two different strategies that exist to deal with such scenarios. Write a very small piece of code for each strategy.

```
The only ways of enforcing is to manually checking the variable's type at runtime. The following strategies could work:

Strategy 1: Crash if the variable is not a number

if (typeof delay !== 'number')
  throw new Error('delay should be number')

Strategy 2: Do nothing and return

if (typeof delay !== 'number') {
  console.log('Warning: delay is not a number -- returning')
  return
}

Strategy 3: Set a default or fallback value for number

if (typeof delay !== 'number')
  delay = 100


Marking scheme: 2 marks for strategy's definition, 2 marks for code. Any 2 out of the above 3 is acceptable.
```

<div style="page-break-after: always;"></div>

# **Question 3: A web page** [25 marks]

---

Given the following web page, answer the upcoming questions. Assume the code works as intended; do not look for syntax or other potential errors.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>A sample web page</title>
    <style>
      input {
        font-size: 24px !important;
      }
      .hidden {
        display: none;
      }
      p {
        font-size: 10px;
      }
      #message {
        font-size: 1.2rem;
      }
    </style>
  </head>

  <body>
    <button id="toggleButton">Show Message</button>

    <p id="message" class="hidden">Hello, this is a hidden message!</p>

    <script>
      const button = document.getElementById("toggleButton");
      const message = document.getElementById("message");

      button.onclick = function () {
        if (!message.classList.contains("hidden")) {
          message.classList.add("hidden");
          button.textContent = "Hide Message";
        } else {
          message.classList.remove("hidden");
          button.textContent = "Show Message";
        }
      };
    </script>
  </body>
</html>
```

## **Part (a)** [4 marks]

Assuming that the `display: none` style causes an element to disappear from the web page, explain what happens when the button is clicked multiple times.

```
Each click toggles the visibility of the p element with id="message" [2 marks] and the button's text itself between "Hide Message" and "Show Message" [2 marks].










```

## **Part (b)** [5 marks]

Draw the DOM tree of this web page. Let `document` be the root of that tree, with `html` as its only child.

Note: Do not include the full text content in your drawing; only write the first few words.

```
document
  └── html
       ├── head
       │    └── style
       │          └── #text (".hidden { ...")
       └── body
            ├── button
            │     └── #text ("Show Message")
            ├── p
            │     └── #text ("Hello, this is ...")
            └── script
                 └── #text ("const button ....")

Marking scheme: 2 marks for text nodes, 1 mark for script and style, 1 mark for html, head, and body, 1 mark for button and p.










```

## **Part (c)** [4 marks]

The `p` element has both `class` and `id` attributes. Explain the purpose of those attributes (in general, not just for that element) and describe a use case for each.

```
The class attribute allows multiple elements to share common styling or behavior [1 mark]. It is useful for applying CSS styles or JavaScript functionality to multiple elements at once [1 mark].

The id attribute uniquely identifies an element on the page [1 mark], making it useful for targeting a specific element in CSS or JavaScript [1 mark].






```

## **Part (d)** [4 marks]

Based on the provided styles, there are two possible font sizes for `Hello, this is a hidden message!`. Explain where each of these two come from, and how the browser determines which style takes precedence (i.e., is applied instead the other).

```
The two possible font sizes for the message are 10px (from the p tag rule) [1 mark] and 1.2rem (from the #message rule) [1 mark].

The browser applies 1.2rem [1 mark] because ID selectors (#message) have higher specificity than tag selectors (p) [1 mark].








```

## **Part (e)** [4 marks]

Observe the `font-size: 1.2rem` style. Assume that the `rem` unit is calculated relative to the font size of the `body` element. Explain what benefits it offers compared to more classic units such as `px`, `cm`, etc.

```
It makes the design more responsive compared to fixed units like px [2 marks], as the root font change based on the window dimensions could automatically update all other sizes [2 marks].









```

## **Part (f)** [4 marks]

Note that the `script` tag is placed after all other elements in `body`. If it were placed before them, would the page and the button still work the same way?

```
The code would not work properly [2 marks], because the script would try to access elements (button and message) that haven't been created yet, resulting in null references [2 marks].










```

<div style="page-break-after: always;"></div>

# Question 4: An API handler [30 marks]

---

Assume a Next.js project is running on port 3000 of the local computer. The file located at `pages/api/weather.js` is shown below. Based on the code, answer the following questions.

```javascript
// Assume this package provides weather data
import weatherService from "weatherService";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).send("Method not allowed");
    return;
  }

  const { city } = req.query;

  // Validate the city parameter
  if (!city || city.trim() === "") {
    res.status(400).send("City parameter is required");
    return;
  }

  // Fetch the weather forecast for the next 24 hours
  const weatherData = await weatherService.getForecast(city, { hours: 24 });

  // Extract the relevant weather forecast from weatherData
  const forecast = weatherData.forecast
    .slice(0, 24)
    .map(
      ({ time, temperature }) =>
        `<li>Time: ${time}, Temperature: ${temperature}°C</li>`
    )
    .join("");

  // Return the weather data to the client
  res.status(200).send(`
      <html>
        <body>
          <h1>Weather forecast for ${city}</h1>
          <ul>${forecast}</ul>
        </body>
      </html>
    `);
}
```

## **Part (a)** [4 marks]

Imagine `weatherService` is an open-source package that provides functionality to fetch weather data. For this code to run, the package needs to be installed. Explain how it can be installed in the Next.js project.

```
It can be installed using npm.

```

## **Part (b)** [4 marks]

What is the URL that serves this logic? What HTTP method(s) does the handler accept?

```
http://localhost:3000/api/weather GET method

Marking scheme: 1 mark for http, 1 mark for localhost:3000, 1 mark for /api/weather, 1 mark for GET.

```

## **Part (c)** [4 marks]

Where does the JavaScript code run -- on the browser, backend, or both? Does this logic represent an API? Explain your answer.

```
The code runs on the backend because it is an API route in a Next.js project, specifically under pages/api/ [2 marks].

Yes, it represents an API [1 mark]. It is a backend interface where different client apps (web, mobile, etc) can use [1 mark].


```

## **Part (d)** [4 marks]

If `weatherService` is unable to find the forecast for the specified city, it will return an object that does not have the `forecast` field. As a result, the handler will crash when it tries to execute `weatherData.forecast.split` (because accessing a property of `undefined` causes an error). The user will then see a `500 Internal Server Error`, which indicates a bug and should ideally not occur.

Add a small logic that could be placed before that line and prevents the code from crashing in that scenario. Your logic should return a response with `404 Not Found` status code and a meaningful message to the user.

```
if (weatherData.forecast === undefined) {
  res.status(404).send("Weather forecast not found for the specified city")
  return
}

Marking scheme: 1 mark for the if condition, 1 mark for status, 1 mark for message, 1 mark for return.


```

## **Part (e)** [14 marks]

The above API does not comply with the principles of REST framework. First, Explain why it is not a RESTful API. Next, specify what changes are needed to make it RESTful. Finally, Write the alternative RESTful code for this API. Only write the lines that need to be changed; not the entire API handler.

```
The API violates REST principles because it returns HTML or plain text instead of JSON [2 marks].

To make it RESTful, all responses must be in JSON format [2 marks].

Code changes:

res.status(405).json({ error: "Method not allowed"}); [1 mark]

res.status(400).json({ error: "City parameter is required"}); [1 mark]

const forecast = weatherData.forecast.slice(0, 24).map(({ time, temperature }) => ({
    time,
    temperature,
  }))
res.status(200).json({ data: forecast }); [8 marks]
```
