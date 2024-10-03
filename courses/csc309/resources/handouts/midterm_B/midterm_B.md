## UNIVERSITY OF TORONTO

## MIDTERM EXAMINATION (GROUP B)

### CSC309 -- Programming on the Web

**Instructor:** Kia Abbasi  
**Date:** Oct 3rd, 2024  
**Duration:** 100 minutes  
**Examination Aids:** One piece of double-sided hand-written letter

<div style="padding: 40px"></div>

| **To be filled by student**                                                                                                                                                                                                                                                                                                                                                                                                                                                  |     |     | **To be filled by grader**                                                                                                                                                                                                            | **Group**                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| **Student Number:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ <br> **UtorID:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ <br><br> **Family Name:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_<br> **Given Name:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |     |     | **#1:** /20 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_<br> **#2:** /25 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_<br> **#3:** /25 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_<br> **#4:** /30 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_<br> <br> **SUM:** /100 \_\_\_\_\_\_\_\_\_\_\_ | <img src="./midterm_B/b.jpg" width="150" height="180"> |

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

In each part, you are given a statement about concepts in web development. Indicate if each statement is
true or false. In either case, provide a very brief explanation for your choice. Do not write detailed
or verbose answers.

## **Part (a)** [2 marks]

HTTP is a stateful protocol, meaning that the server's response depends on not only on the client's request, but also all previous packets transmitted.

```





```

## **Part (b)** [2 marks]

JavaScript classes are not real classes (in the object-oriented sense of the word) -- they are syntactic sugar. That is, they are merely functions that return objects, but in a form that resembles Java classes.

```





```

## **Part (c)** [2 marks]

A web browser is the only software that is capable of executing JavaScript code.

```






```

## **Part (d)** [2 marks]

Submitting a form with the `GET` method appends the data to the end of the _path_ (first line of the HTTP message), whereas other methods put the data in the _body_ part of the HTTP message.

```






```

## **Part (e)** [2 marks]

In modern web apps, the backend server is mostly concerned with data management, and does not care about how the response is rendered on the client side.

```







```

## **Part (f)** [2 marks]

In JavaScript, not only you can modify any field (attribute) of an object, you can also add new attributes to it after initialization.

```







```

## **Part (g)** [2 marks]

JavaScript's `undefined` value is a legacy feature with strange behavior. Newer versions introduced `null`, which serves the same purpose but in a more sensible way.

```







```

## **Part (h)** [2 marks]

The main difference between Node.js and the browser's JS engine is that the browser's runtime is multi-threaded, while the Node.js runtime is single-threaded.

```







```

## **Part (i)** [2 marks]

Even though async programming may create an illusion of concurrency, it is not truly concurrent. That is, all the logic is eventually executed sequentially.

```







```

## **Part (j)** [2 marks]

In a Next.js project, an API handler can only return JSON objects. This object is then transformed into an HTTP response by the framework.

```







```

<div style="page-break-after: always;"></div>

# **Question 2: A JavaScript snippet** [25 marks]

---

Given the below piece of JavaScript code, answer the following questions. Assume that the below piece runs without any errors in the browser's _Console_ tab, inside the Inspect Element panel.

```javascript
class Course {
  constructor(code, capacity) {
    this.code = code;
    this.capacity = capacity;
  }

  print() {
    console.log(this.code, this.capacity);
  }

  printArrow = () => {
    console.log(this.code, this.capacity);
  };

  printWithDelay = function () {
    setTimeout(() => {
      console.log(this.code, this.capacity);
    }, 1000);
  };

  extendCapacity(by) {
    this.capacity += by;
  }
}

const course1 = new Course("csc309", 240);
const course2 = new Course("csc263");
```

## **Part (a)** [2 marks]

What will be the new value of `course1.capacity` after calling `course1.extendCapacity(10)`? What does this tell you about the mutability of objects in JavaScript?

```





```

## **Part (b)** [2 marks]

Notice that when creating `course2`, only one argument is passed to the constructor. Why does the code not crash? What will the value of `this.capacity` be in this case?

```





```

## **Part (c)** [4 marks]

What will be the result of `typeof(Course)` and `typeof(course1)`, respectively? What do these outputs reveal about the relationship between JavaScript and object-oriented programming?

```






```

## **Part (d)** [4 marks]

What will be printed to the console when calling `course1.print()` and `course1.printArrow()`? Do both methods print the same value? Explain why or why not.

```








```

## **Part (e)** [4 marks]

What happens when you call `course1.printWithDelay()`? What will be printed to the console? Explain how the behavior of `this` affects the output.

```








```

## **Part (f)** [9 marks]

What assumptions is the function `extendCapacity` implicitly making about the types of variables? What will happen if they are not met at runtime. List at least 2 strategies to mitigate this issue and provide a small piece of code for each strategy.

```






















```

<div style="page-break-after: always;"></div>

# **Question 3: A web page** [25 marks]

---

Given the following web page that runs on `http://localhost:3000/home`, answer the upcoming questions. Assume that the code works as intended, so do not look for syntax or other potential errors.

```html
<html lang="en">
  <head>
    <style>
      div {
        padding: 10px !important;
      }
      .form-container {
        padding: 0;
      }
    </style>
  </head>

  <body>
    <div class="form-container">
      <h2>Sign Up</h2>
      <form method="POST" action="/signup" id="signup-form">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="user__name" />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="user__email" />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" name="user__password" />
        </div>
        <button type="submit">Submit</button>
        <p class="error" id="error-message"></p>
      </form>
    </div>

    <script>
      const form = document.getElementById("signup-form");
      const errorMessage = document.getElementById("error-message");

      form.onsubmit = function () {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        if (name === "" || email === "" || password === "") {
          errorMessage.textContent = "All fields are required.";
          return false;
        }
        if (password.length < 6) {
          errorMessage.textContent =
            "Password must be at least 6 characters long.";
          return false;
        }
        return true;
      };
    </script>
  </body>
</html>
```

## **Part (a)** [4 marks]

When a `submit` event handler returns `false`, the default behavior (what would run if the handler did not exist) will not run anymore. If it returns `true`, the default behavior is executed afterwards. In other words, the form is submitted and a request is made.

Given that information, explain what happens when user clicks on the submit button?

```












```

## **Part (b)** [5 marks]

Imagine a user enters `Dara`, `info@dara.com`, and `12345678` in the input boxes for name, email, and password, respectively. In this case, the above submit handler does not return `false`, and the default form submission action is executed. Describe the full URL of the resulting HTTP request, as well the body (i.e., payload) of it.

```













```

## **Part (c)** [4 marks]

Observe the line `padding: 10px !important`. Describe what _padding_ is in context of Box Model. Also, explain the effect of the `!important` rule on the page.

```












```

## **Part (d)** [4 marks]

When the user enters their password into the form, will it be encrypted before being sent in the HTTP request? If so, describe the encryption techniques. If not, discuss an alternative approach that might enhance the user's privacy and safety.

```










```

## **Part (e)** [4 marks]

Observe the element `<label for="name">Name:</label>`. Imagine we remove the surrounding `label` tag and just leave the plain text (i.e., `Name:`) instead. Will the page still render the same way? If so, which approach is a better practice? explain your answer in detail.

```










```

## **Part (f)** [4 marks]

What is the primary purpose of the validation checks in the above code? It is to help enhance user experience, increase security, or both? Explain your answer.

```














```

<div style="page-break-after: always;"></div>

# Question 4: An API handler (30 marks)

---

Assume a Next.js project is running on port 3000 of the local computer. The file located at `pages/api/send-email.js` is shown below. Based on the code, answer the following questions.

```javascript
import { sendEmail } from "mailutils";

export default async function handler(req, res) {
  const { method } = req;

  if (method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${method} is not allowed` });
  }

  if (req.headers["content-type"]?.toLowerCase() !== "application/json") {
    res.status(400).json({ message: "Content type must be application/json" });
    return;
  }

  const { to, subject, message } = req.body;

  if (!to || !subject || !message) {
    res
      .status(400)
      .json({ message: "To, subject, and message fields are required" });
    return;
  }

  await sendEmail(to, subject, message);

  res.status(200).json({ message: "Email sent successfully to " + to });
}
```

## **Part (a)** [4 marks]

What is the URL that serves this logic? What HTTP method(s) does the handler accept?

```




```

## **Part (b)** [4 marks]

Explain what happens when a user enters the URL you provided in the previous part into a browser's address bar. What will the user see?

```








```

## **Part (c)** [4 marks]

Imagine `mailutils` is an open-source package that provides utility functions for sending emails. For this code to run, the package needs to be installed. Explain how the package can be installed in the Next.js project.

```




```

## **Part (d)** [4 marks]

As evident in the code, several validation checks are performed before the email is sent. List the different validation checks and explain the scenarios that they target.

```










```

## **Part (e)** [4 marks]

The code above has a crucial bug in its validation checks. Identify the bug and describe what scenario will trigger it, and what happens as a result. Also, provide a fix for the bug. Note that the bug exists in the _current_ set of validation checks. Therefore, do **not** look for more validation checks that could be added.

```










```

## **Part (f)** [4 marks]

Notice the `sendEmail` function is called via `await`, indicating that it is an async function. Explain why it is important for the `sendEmail` function to be async, and how it helps optimize your web application.

```








```

## **Part (g)** [6 marks]

Assume that if the destination email is invalid, unreachable, or not a real email, the internal `sendEmail` will throw a new instance of `EmailAddressError`. In that case, since the API handler above lacks exception handling logic, the entire handler crashes, and the client sees a generic **500 Internal Server Error**.

However, that failure occurs due to a client-side error, so it is very misleading to attribute the error to the server. In the space below, write a small logic that could be added to the code to solves this issue. That is, if `sendEmail` fails with the specified error, return a JSON response with a status code of **400 Bad Request** and a helpful message.

Hint: You can use the `instanceof` operator to check whether an object was instantiated from a specific class or not (e.g., `test instanceof Test`).

```


















```

_Use the space below for rough work. This page will not be marked, unless you clearly indicate the part
of your work that you want us to mark._

---

<div id="rough_work">
<div style="page-break-after: always;"></div>

_Use the space below for rough work. This page will not be marked, unless you clearly indicate the part
of your work that you want us to mark._

---

<div style="padding: 650px 0"></div>
</div>
