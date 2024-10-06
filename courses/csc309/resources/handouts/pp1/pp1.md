## Scriptorium: the new way of writing codes!

Scriptorium is an innovative online platform where you can write, execute, and share code in multiple programming languages. Inspired by the ancient concept of a scriptorium, a place where manuscripts were crafted and preserved, Scriptorium modernizes this idea for the digital age. It offers a secure environment for geeks, nerds, and coding enthusiasts to experiment, refine, and save their work as reusable templates. Whether you're testing a quick snippet or building a reusable code example, Scriptorium is what you need to bring your ideas to life.

[<img src="./pp1/logo.jpg" width="250" style="margin: auto">](./pp1/logo.jpg)

## About the project

The project is handed out from the business owner's point of view. That is, those people do not necessarily have a deep technical understanding about web, Next.js, APIs, etc. Therefore, the requirements are described in a non-technical way, and it is your job to design and implement the web application that meets them. There is much room for creativity, and you get decent freedom with respect to the details and various tools you can use for this project. There are a few general limitations, such as using Next.js, Prisma, REST, React, TailwindCSS, and Docker (as outlined in the handouts). Beside these, you can utilize any existing package, library, and open-source code to improve your app.

The project is divided into two parts. In part 1, you will use Next.js, Prisma, and REST Framework to implement the backend of the project. In part 2, you will implement the frontend using React and TailwindCSS and connect the backend to it. You will also address the security vulnerabilities of the app with Docker. The eventual outcome of this project is a fully-functional web application that meets the user stories listed in an upcoming section.

### Groups

This project is done in groups of up to three members. Register your groups on Markus as soon as you have found the teammates. The scope of the project is appropriate for a group of three members. However, if some members have already had prior knowledge in web development, groups of two would be fine as well. You can also choose to work entirely on your own, which is strongly discouraged as the load will be overwhelming.

Note: The number of members will not affect our grading criteria. That is, your submission will be graded the same way, regardless of how many team members are there.

### Deadline

Part 1 is due on **Sunday, October 27th at 22:00**. Late submissions will be accepted with a penalty of 10% per day, up to a maximum of three days late.

If you are registered with Accessibility Services, you might be entitled to extensions on the project deadlines. In that case, email the instructor (via the course-related email) at least one week before the deadline and request the extension. Note that individual entitlements will be adjusted to the size of the team. For example, if one member of a team of two is entitled to 7 days of extensions, the team will be granted ⌈7/2⌉=4 days.

### Academic Integrity

Honesty and fairness are fundamental to the University of Toronto’s mission. Plagiarism is a form of academic fraud and is treated very seriously. You are also expected to read the handout [How Not to Plagiarize](http://www.writing.utoronto.ca/advice/using-sources/how-not-to-plagiarize) and to be familiar with the [Code of Behavior on Academic Matters](https://governingcouncil.utoronto.ca/secretariat/policies/code-behaviour-academic-matters-july-1-2019).

You are allowed to search the internet, use online resources, open-source codes, and generative AI (e.g., ChatGPT) to help you with the project. However, sharing even a small piece of code with other teams is strictly prohibited (whether giving or receiving).

Note that all work that was not written by you or your teammates must be cited in the code, including open-source codes and code created by generative AI.

### Mentor sessions

You can sign up for up to two mentor sessions with a TA to discuss your ideas, ask questions, or seek help on any project-related issue. Note that the total number of sessions are limited and will be filled on a first-come-first-serve basis. Details on how to book a session will be posted on Piazza.

### Interviews

Each part will be graded separately through interview sessions with TAs. Attending the interview is absolutely necessary for obtaining marks from of the project. All team members must be present at the meeting, and the **absent members will not get any marks** for the part. Instructions on booking interviews will be announced on Piazza.

Note that TAs will clone your code from Markus and attempt to run it from scratch on their own machines. It is important that your submitted code is ready-to-go.

### Participation

Each team member must do a fair amount of work on this project. We will assess each member's participation by investigating the commits they created and asking detailed questions about the code at the interviews. Even though it is a group project, your final grade is individual.

### Submission

You should submit your work to your group's git repository on Markus. Find out your repo's URL by logging into Markus. Note that there is a separate repository for each part.

Correct use of git is part of your assessment. Commit your changes now and then, when a small logical change has been made. Do not leave your commits to the very last minutes before the deadline. Always write informative commit messages.

### Environment

Your code must run in an Ubuntu 22.04 machine that has Node.js 20+, gcc, g++, python 3.10+, and Java 20+ installed. It is fine if you are developing your code on other operating systems, although Windows is strongly discouraged. However, it is your responsibility to make sure that your server and scripts (described later) run without any problem on Ubuntu 22.04 before submitting. ~~The teach.cs accounts are good examples of such environments.~~

## Scriptorium features

The following paragraphs describe the features that should be included in Scriptorium. As stated earlier, features are explained in terms of **user stories**, in a non-technical form, and from an imaginary user's point of view. Details that are not discussed below are left out to you, and you get to design or implement them your way.

Stories that start with _as a user_ indicate a feature that only authenticated users can access, while ones that start with _as a visitor_ indicate features that are available to everyone that visits the website, whether logged in or not. Finally, stories that start with _as the system administrator_ indicate a feature that only users with admin privileges can access.

**Important note**: The below user stories are for the full website. You are not going to implement all of them in part 1. However, it is important to keep the full picture of the app in your mind, even during part 1.

### Accounts

- As a user, I want to sign up, log in, log out, and edit my profile. Profile information should include first and last name, email, avatar, and phone number. Authentication should be handled with a proper JWT setup.

### Code writing and execution

- As a visitor (unauthenticated user), I want to write code in various programming languages (e.g., C, C++, Java, Python, JavaScript) on Scriptorium.
- As a visitor, I want my code to be highlighted based on the syntax rules of the programming language so that I get a good understanding of my code.
- As a visitor, I want to execute my code on Scriptorium and see the output in real-time so that I can quickly verify its correctness.
- As a visitor, I want to provide input to my code via the standard input (`stdin`) before execution so that I can test programs that require user input.
- As a visitor, I want to see error messages if my code fails to compile or run so that I can debug my code effectively. This includes compile errors, runtime errors, timeouts, or any warnings generated in the meantime.

### Isolation

- As a visitor, I want my code to run in a secure, isolated environment so that it does not affect other users or the system.
- As a visitor, I want the system to enforce a time and memory limit on code execution so that infinite loops or long-running processes are automatically terminated.

### Code templates

- As a user (authenticated), I want to save my code as a template with a title, explanation, and tags so that I can organize and share my work effectively.
- As a user, I want to view and search through my list of my saved templates, including their titles, explanations, and tags, so that I can easily find and reuse them.
- As a user, I want to edit an existing code template’s title, explanation, tags, and code, or delete it entirely.
- As a visitor, I want to use an existing code template, run or modify it, and if desired, save it as a new template with a notification that it’s a forked version, so I can build on others’ work. Saving a template is only available to authenticated users.
- As a visitor, I want to search through all available templates by title, tags, or content so that I can quickly find relevant code for my needs.

### Blog posts

- As a user, I want to create/edit/delete blog posts. A blog post has title, description, and tag. It might also include links to code templates (either mine or someone else's).
- As a visitor, I want to browse and read blog posts so that I can learn from others' experiences and code examples. I want to search through blog posts by their title, content, tags, and also the code templates they contain.
- As a visitor, I want to follow links from a blog post directly to the relevant code template so that I can view, run, or fork the code discussed.
- As a visitor, I want to see the list of blog posts that mention a code template on the template page.
- As a user, I want to comment, or reply to existing comments on a blog post so that I can engage with the author and other readers by sharing feedback, asking questions, or starting discussions.
- As a user, I want to rate blog posts and comments with upvotes or downvotes so that I can express my agreement or disagreement with the content.
- As a visitor, I want to see the list of blog posts and comments sorted by their ratings so that I get exposed to the most valued or controversial discussions first.

### Inappropriate content reports

- As a user, I want to report an inappropriate blog post or comment so that the website is purged of abusive content. I want to add additional explanation when submitting my report.
- As the system administrator, I want to sort blog posts and comments based on the total number of reports they received so that I can find the inappropriate content easier.
- As the system administrator, I want to hide a content that I deem inappropriate so that Scriptorium remains safe for everyone. This content would then be hidden from everyone, except for the author. The author can still see the content (with a flag that indicates the reports), but cannot edit it.

### User experience

- As a visitor, I want a clean and intuitive user interface so that I can easily write, execute, and manage my code templates without confusion.
- As a visitor, I want the website to be rendered well in different screen sizes (e.g., monitors, laptop, tablet, and mobile) so I can effectively work on my codes everywhere.
- As a visitor, I want to be able to toggle between dark and light themes so that I can choose the most comfortable working environment.

## Part 1 deliverables

In this part, you will implement the Next.js backend for the project. You should design database models and API endpoints that fulfill the above user stories. All APIs must be written in the REST framework. You should also figure out what user stories are relevant to the backend of the app and only implement those.

Also, in this part, limit the programming languages to only **C, C++, Java, Python, and JavaScript**. Make sure that the compilers/interpreters for those languages are installed on your machines. In part 2, you will be able to support more languages and provide isolation using Docker. Therefore, the isolation/security/timeout user stories are not needed in this part.

This part's grading is completely independent of the next part. You get to modify your backend code in whatever way you would like for the next part. This part's grade will **not** update based on your submission for part 2.

**Note 1**: As potentially ambiguous as the handout gets, you can ask your questions on Piazza or discuss them with TAs at mentor sessions.

**Note 2**: All APIs that return a potentially long list of items (e.g., list of templates, blogs, comments, etc.) must be paginated so that a reasonable amount of data is returned in one response.

## What to submit

You should push your entire Next.js project to your repo, accompanied by a `startup.sh` script, a `run.sh` script, a `docs.pdf` file, and a `postman.json` collection. These files should be located in the root folder of your repository.

The `startup.sh` script should run any preparation needed for your code to run in a new environment. It should create install all required packages via npm, run all migrations, and check that the required compilers/interpreters are already installed. The `run.sh` script should start your server.

Your documentation must include your model design and the full list of all API endpoints. Each endpoint must include a short description, the allowed methods, payloads, and an example request and response. You can use packages that automatically generate the API docs from your code. The TA will send requests based on the information you provide on that document. Therefore, it is important to have a usable and clear document.

The postman collection must be an export of all the APIs that are importable into Postman. The TA will use Postman to test your APIs, so it is important that your collection is comprehensive, well-organized, and self-explanatory. All the POST data, headers, and GET query parameters must be pre-filled and editable in that collection.

**Important note**: Before submitting, make sure that your startup and run scripts work well on the environment described earlier, and your collection can be imported into Postman without any issues. The TAs will run your application on clean instances of that environment. If you have worked with another operating system, it is your responsibility to double-check that your server works fine on our environment as well.
