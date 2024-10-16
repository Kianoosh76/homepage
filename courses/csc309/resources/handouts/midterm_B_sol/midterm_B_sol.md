## UNIVERSITY OF TORONTO

## MIDTERM EXAMINATION (GROUP B) -- SOLUTIONS

### CSC309 -- Programming on the Web

**Instructor:** Kia Abbasi  
**Date:** Oct 3rd, 2024  
**Duration:** 100 minutes  
**Examination Aids:** One piece of double-sided hand-written letter

<div style="padding: 40px"></div>

| **To be filled by student**                                                                                                                                                                                                                                                                                                                                                                                                                                                  |     |     | **To be filled by grader**                                                                                                                                                                                                            | **Group**                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| **Student Number:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ <br> **UtorID:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ <br><br> **Family Name:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_<br> **Given Name:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |     |     | **#1:** /20 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_<br> **#2:** /25 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_<br> **#3:** /25 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_<br> **#4:** /30 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_<br> <br> **SUM:** /100 \_\_\_\_\_\_\_\_\_\_\_ | <img src="./midterm_A_sol/b.jpg" width="150" height="180"> |

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
False —- HTTP is a stateless protocol, meaning each request is independent, and the server does not remember previous requests.



```

## **Part (b)** [2 marks]

JavaScript classes are not real classes (in the object-oriented sense of the word) -- they are syntactic sugar. That is, they are merely functions that return objects, but in a form that resembles Java classes.

```
True —- JavaScript classes are syntactic sugar for constructor functions and prototypes, providing a familiar syntax for programmers that are used to Object-oriented languages.



```

## **Part (c)** [2 marks]

A web browser is the only software that is capable of executing JavaScript code.

```
False —- JavaScript can also be executed in environments other than the browser, such as in Node.js.




```

## **Part (d)** [2 marks]

Submitting a form with the `GET` method appends the data to the end of the _path_ (first line of the HTTP message), whereas other methods put the data in the _body_ part of the HTTP message.

```
True —- Data submitted via the GET method is appended to the URL as query parameters, while other methods like POST include the data in the body.




```

## **Part (e)** [2 marks]

In modern web apps, the backend server is mostly concerned with data management, and does not care about how the response is rendered on the client side.

```
True —- In modern web apps, the backend focuses on data management, while the frontend handles how the data is presented and rendered.




```

## **Part (f)** [2 marks]

In JavaScript, not only you can modify any field (attribute) of an object, you can also add new attributes to it after initialization.

```
True —- JavaScript allows you to modify or add new properties to objects dynamically after their creation.






```

## **Part (g)** [2 marks]

JavaScript's `undefined` value is a legacy feature with strange behavior. Newer versions introduced `null`, which serves the same purpose but in a more sensible way.

```
False —- undefined and null serve different purposes. null is a special value of type object (semantically indicating the absence of value). undefined is the only value of type undefined and is used for the cases that usually lead to an error in other programming language usually (e.g., index out of bounds).




```

## **Part (h)** [2 marks]

The main difference between Node.js and the browser's JS engine is that the browser's runtime is multi-threaded, while the Node.js runtime is single-threaded.

```
False —- Both Node.js and browser JS engines are single-threaded.






```

## **Part (i)** [2 marks]

Even though async programming may create an illusion of concurrency, it is not truly concurrent. That is, all the logic is eventually executed sequentially.

```
True —- all logic is sequentially executed by the event loop in one thread.





```

## **Part (j)** [2 marks]

In a Next.js project, an API handler can only return JSON objects. This object is then transformed into an HTTP response by the framework.

```
False —- Next.js API handlers can return other types of responses, such as plain text or HTML, not just JSON objects.





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
It will be 250 [1 mark]. It demonstrates that objects in JavaScript are mutable because we where able to modify it in place [1 marks].



```

## **Part (b)** [2 marks]

Notice that when creating `course2`, only one argument is passed to the constructor. Why does the code not crash? What will the value of `this.capacity` be in this case?

```
It will not crash because JavaScript allows functions to be called with fewer or more arguments than expected [1 marks]. The value of this.capacity is undefined [1 mark].


```

## **Part (c)** [4 marks]

What will be the result of `typeof(Course)` and `typeof(course1)`, respectively? What do these outputs reveal about the relationship between JavaScript and object-oriented programming?

```
typeof(Course) returns "function" [1 mark] and typeof(course1) returns "object" [1 mark].

They indicate the JavaScript classes are merely syntax sugars to create objects, and that it's not a true object oriented language [2 marks].

```

## **Part (d)** [4 marks]

What will be printed to the console when calling `course1.print()` and `course1.printArrow()`? Do both methods print the same value? Explain why or why not.

```
course1.print() will print "csc309 240" [1 mark] to the console because this refers to the obj object, which contains the firstName property [1 mark].
course1.printArrow() will print "csc309 240" as well [1 mark]. Arrow functions do not have their own this context and read it from the outer scopes. In this case, the outer scope is the class body, which does have the this value and points to the caller object. [1 mark].


```

## **Part (e)** [4 marks]

What happens when you call `course1.printWithDelay()`? What will be printed to the console? Explain how the behavior of `this` affects the output.

```
When calling course1.printWithDelay(), the setTimeout function runs after at least 100 milliseconds [1 mark]. Since the setTimeout callback is an arrow function, the value of this comes from its closure, in this the outer regular function [2 mark]. Therefore, "csc309 240" will be printed to console [1 mark].




```

## **Part (f)** [9 marks]

What assumptions is the function `extendCapacity` implicitly making about the types of variables? What will happen if they are not met at runtime. List at least 2 strategies to mitigate this issue and provide a small piece of code for each strategy.

```
The extendCapacity function assumes that the by argument is always a number [2 mark] and that this.capacity is also a number [2 mark]. If these assumptions are not met, this.capacity could result in weird behaviors like string contacts, NaN, etc. [1 mark]


Strategy 1: Crash if the variable is not a number

if (typeof by !== 'number')
  throw new Error('delay should be number')

Strategy 2: Do nothing and return

if (typeof by !== 'number') {
  console.log('Warning: by is not a number -- returning')
  return
}

Strategy 3: Set a default or fallback value for number

if (typeof by !== 'number')
  by = 100


Marking scheme: 1 marks for strategy's definition, 1 mark for code. Any 2 out of the above 3 is acceptable.
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

## **Part (a)** [5 marks]

When a `submit` event handler returns `false`, the default behavior (what would run if the handler did not exist) will not run anymore. If it returns `true`, the default behavior is executed afterwards. In other words, the form is submitted and a request is made.

Given that information, explain what happens when user clicks on the submit button?

```
When the user clicks the submit button, the event handler checks whether the form fields (name, email, password) are valid [1 mark].

If any field is empty [1 mark] or the password is shorter than 6 characters [1 mark], the form will not be submitted, and an error message will be displayed [1 mark].

Otherwise, the form is submitted, and a request is sent to the server [1 mark].







```

## **Part (b)** [5 marks]

Imagine a user enters `Dara`, `info@dara.com`, and `12345678` in the input boxes for name, email, and password, respectively. In this case, the above submit handler does not return `false`, and the default form submission action is executed. Describe the full URL of the resulting HTTP request, as well the body (i.e., payload) of it.

```
URL:
http://localhost:3000/signup [2 marks]

Payload:
user__name: Dara [1 mark]
user__email: info@dara.com [1 mark]
user__password: 12345678 [1 mark]







```

## **Part (c)** [4 marks]

Observe the line `padding: 10px !important`. Describe what _padding_ is in context of Box Model. Also, explain the effect of the `!important` rule on the page.

```
Padding is the space between the content of an element and its border. It adds extra space inside the element [2 marks].

The !important rule overrides the original CSS precedence rules. In that case, div with class form-container will have padding equal to 10px instead of 0, even though it comes from a less specific style [2 marks].







```

## **Part (d)** [4 marks]

When the user enters their password into the form, will it be encrypted before being sent in the HTTP request? If so, describe the encryption techniques. If not, discuss an alternative approach that might enhance the user's privacy and safety.

```
No [1 mark]. The password will not be encrypted before being sent because the form sends the data as plain text in a POST request [1 mark].

An alternative approach would be to use HTTPS. which encrypts the entire HTTP request [2 marks].






```

## **Part (e)** [4 marks]

Observe the element `<label for="name">Name:</label>`. Imagine we remove the surrounding `label` tag and just leave the plain text (i.e., `Name:`) instead. Will the page still render the same way? If so, which approach is a better practice? explain your answer in detail.

```
Yes, the page will render the same way [2 marks].

However, using the <label> element is considered better practice because it wraps the text content in a specific element. This way, you can easily associate attributes (such as class and id) to it and implement JS or CSS logic for that [2 marks].






```

## **Part (f)** [4 marks]

What is the primary purpose of the validation checks in the above code? Is it to help enhance user experience, increase security, or both? Explain your answer.

```
Their primary purpose is to enhance use experience [1 mark]. If user makes an obvious error (like an empty email), they should not wait for a request to be sent (and potentially a page reload) until they find that out [1 mark].

They do not provide any additional security as the server must re-do all validation checks once more. Client-side checks are very easy to bypass, and the requests do not even have to come from a browser. So they don't bring any additional security [2 marks].





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
    res.status(405).json({ message: `Method ${method} not allowed` });
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
http://localhost:3000/api/send-email
POST method

Marking scheme: 1 mark for http, 1 mark for localhost:3000, 1 mark for /api/send-email, 1 mark for POST.

```

## **Part (b)** [4 marks]

Explain what happens when a user enters the URL you provided in the previous part into a browser's address bar. What will the user see?

```
The default HTTP method is GET [1 mark], so the handler does not get passed the first if statement. The user will see a JSON string on the browser [2 mark] with the content of {"message": "Method GET is not allowed"} [1 mark].






```

## **Part (c)** [4 marks]

Imagine `mailutils` is an open-source package that provides utility functions for sending emails. For this code to run, the package needs to be installed. Explain how the package can be installed in the Next.js project.

```
It can be installed via npm



```

## **Part (d)** [4 marks]

As evident in the code, several validation checks are performed before the email is sent. List the different validation checks and explain the scenarios that they target.

```
1. Checks the `content-type` header to be equal to `application/json`. Returns a 400 error otherwise. [1 mark]

2. Checks the request method to be POST. Returns a 405 error otherwise [1 mark].

3. Checks the `to`, `subject`, and `message` fields are present [1 mark] and non-empty [1 mark].







```

## **Part (e)** [4 marks]

The code above has a crucial bug in its validation checks. Identify the bug and describe what scenario will trigger it, and what happens as a result. Also, provide a fix for the bug. Note that the bug exists in the _current_ set of validation checks. Therefore, do **not** look for more validation checks that could be added.

```
There is a missing 'return' if the validation for the POST method fails [1 mark].

Because of that, the handler will still try to send email, even if it the method is not POST and it already set the response status to 405 [2 marks].

To fix that, a return should be added after the line starting with 'res.status(405)....' [1 mark].




```

## **Part (f)** [4 marks]

Notice the `sendEmail` function is called via `await`, indicating that it is an async function. Explain why it is important for the `sendEmail` function to be async, and how it helps optimize your web application.

```
Email sending is an I/O bound task, meaning that its resolution depends on the mail server responding to us [2 marks]. So making it async allows the server not to block or idle while waiting for the response to arrive [2 marks]





```

## **Part (g)** [6 marks]

Assume that if the destination email is invalid, unreachable, or not a real email, the internal `sendEmail` will throw a new instance of `EmailAddressError`. In that case, since the API handler above lacks exception handling logic, the entire handler crashes, and the client sees a generic **500 Internal Server Error**.

However, that failure occurs due to a client-side error, so it is very misleading to attribute the error to the server. In the space below, write a small logic that could be added to the code and solves this issue. That is, if `sendEmail` fails with the specified error, return a JSON response with a status code of **400 Bad Request** and a helpful message.

Hint: You can use the `instanceof` operator to check whether an object was instantiated from a specific class or not (e.g., `test instanceof Test`).

```
The solution is to wrap the sendEmail call in a try-catch block.

try {
  await sendEmail(to, subject, message)
} catch (error) {
  if (error instanceof EmailAddressError) {
    res.status(400).json({ message: 'Invalid or unreachable email address'})
  } else {
    res.status(500).json({ message: 'Unknown error' }) // Or just rethrow the error
  }
}

Marking scheme: 2 marks for the try-catch block, 1 mark for instanceof, 1 mark for the 400 error, 2 marks for the 500 error or a rethrow







```
