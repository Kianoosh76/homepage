## Scriptorium: the new way of writing codes! (part 2)

Please find the general information about the project, features, interviews, mentor sessions, rules, etc. on the [part 1 handout](./?source=pp1). All rules and restrictions apply to this part as well.

In this part, you are to implement the React frontend of TFC and connect it to your backend server. You will also enhance the web app's security and reliability using Docker. The deliverable is a fully-functional website that is shippable, presentable, self-explanatory, smooth, and beautiful.

### Deadline

Part 2 is due on **Friday, November 22nd at 22:00**. Late submissions will be accepted with a penalty of 10% per day, up to a maximum of three days late.

If you are registered with Accessibility Services, you might be entitled to extensions on the project deadlines. In that case, email the instructor (via the course-related email) at least one week before the deadline and request the extension. Note that individual entitlements will be adjusted to the size of the team. For example, if one member of a team of two is entitled to 7 days of extensions, the team will be granted ⌈7/2⌉=4 days.

### Academic Integrity

Honesty and fairness are fundamental to the University of Toronto’s mission. Plagiarism is a form of academic fraud and is treated very seriously. You are also expected to read the handout [How Not to Plagiarize](http://www.writing.utoronto.ca/advice/using-sources/how-not-to-plagiarize) and to be familiar with the [Code of Behavior on Academic Matters](https://governingcouncil.utoronto.ca/secretariat/policies/code-behaviour-academic-matters-july-1-2019).

You are allowed to search the internet, use online resources, open-source codes, and generative AI (e.g., ChatGPT) to help you with the project. However, sharing even a small piece of code with other teams is strictly prohibited (whether giving or receiving).

Note that all work that was not written by you or your teammates must be cited in the code, including open-source codes and code created by generative AI.

### Environment

Your code must run in an Ubuntu 22.04 machine that has Node.js 20+ and Docker installed. You should not make assumptions on the existence of compilers anymore. It is fine if you are developing your code on other operating systems, although Windows is **strongly discouraged** as the its Dockerfiles might not work on Linux. At the end, it is your responsibility to make sure that your server and scripts (described later) run without any problem on Ubuntu 22.04 before submitting.

## Part 2 deliverables

For this part, you will implement **all** user stores listed in the previous part. To do that, use React and TailwindCSS to deliver a single-page and responsive UI. Obviously, you can modify the backend code in any way you would like.

The interviews will simulate the real-world delivery of your application to the business owner. That is, the business owner is looking for a complete website that is smooth, secure, self-explanatory, fast, and without bugs.

### Using TypeScript

You should implement all of your part 2 code in TypeScript. In order to fully enjoy the benefits of TypeScript and Monorepo, it is strongly recommended to migrate your part 1 code to TypeScript as well, but that might take a considerable amount of time. You will receive a small bonus if you have a fully type-safe system (backend, frontend, and their interaction).

### Using Docker

You must have already noticed that just relying on the existence of the compilers on the host machine is a pain which severely limits the portability and scalability of your app. Also, your part 1 app is ridiculously unsecure. Anyone can send a code that deletes entire directories of the server machine! (You can actually try that to a harmless directory!). Users can submit codes with infinite while loops or [fork bombs](https://en.wikipedia.org/wiki/Fork_bomb) and bring your website down easily. Also, two malicious communicators can submit a code that leave a file behind, and subsequently read and write from that.

That is, allowing external users to run code on your own host is one of the greatest security vulnerabilities of all times. User codes must run in **isolation**. That is, it runs in a _sandbox_; a virtualization with limited time, CPU, and memory allocation, where we ensure that users cannot run any malicious code or make a lasting impact on the server. As discussed in Week 10 of the lectures, Docker is a perfect choice for this!

In this part, you will transform your infrastructure to run user codes on Docker containers. A cherry on the cake is that now you can support way more programming languages than part 1. You can even support different versions of the same compiler. For the delivery, **at least support 10-15 major programming languages**. If your Dockerfiles are written well, you should not run into much overhead in adding more languages.

**Note**: Code execution should be almost as fast as the previous part. That is, you cannot build the entire image at every single execution.

### User experience

Pay utmost attention to the UX, where users should be able to navigate around without any problem or any need for instructions from someone else. You certainly remember websites that you left before a minute because you could not find a page you where looking for, or parts of a button was not clickable because of a simple frontend bug. You certainly did not have any empathy for the potentially countless hours the backend and frontend engineers spent on building that app and whether other parts worked well or not. You left the website, and that was the loss of a potential customer for that business.

In our interviews, we will not be as harsh as mentioned above, but you should expect that the marking scheme is different from a classic project where the only important thing is that the code somehow works. You will lose marks if your web app is slow (take too long for code to run), it is incomplete (lacks some functionalities), or has major or minor infra/UI/UX bugs. Users should be able to work smoothly with the web app on devices with different screen size. Smooth UX is also about single-page experience, front-end validations, in-place error-handling, asynchronous requests, and clean re-rendering.

**Note**: This course is not about UI design; so you will not be judged for the look of the website like a designer. However, you must adhere to the common sense when it comes to your UI. Your UI must give a good first impression to users. Exploring your website should be delightful for users. A basic UI that everyone can tell it is the default of a framework (e.g., bootstrap) is not delightful to explore.

**Note 2**: Your website should include pages. That is, even though you are building a single-page application, you should change the browser's URL accordingly so that users will be able to navigate through different places with the back/forward button or re-visit a specific page through its URL. Different sections of the app must be reachable by a navigation bar. A user dropdown to see/edit profile, manage posts and templates, and logout is also required. The user must never need to manually change the URL. Besides those requirements, the exact content of pages and the choice of first page (or landing page) is up to you. We recommend that your first page includes the search functionality, and also includes to top blog posts and code templates, with a clearly visible button that links to the online editor.

### Pre-populated database

Unlike last part, you should push your database/media files to your repository. The reason is pre-existing data improves your presentation a lot. Real-world business owners certainly do not want to navigate a blank website that contains only a couple of studios. To showcase your project, it is suggested that you include at least 30-40 templates, blog posts, comments, and users with their full information. You can seek help from generative AI for that.

**Note**: Make sure that your database is not too big that it would take a lot of time to clone/load.

### Pagination

As mentioned in part 1 handout, every API that returns a list of objects should be paginated. Depending on your database size, choose your page size so that the TA can test that you implemented pagination correctly. For example, a page size of 200 when you only have 100 blog posts means that the TA should create 100 new posts to check this feature, which is impossible. You can implement pagination via regular buttons (like google search on Desktops) or through infinite scrolls. Also, different endpoints can have different page sizes.

### Deployment

You will receive bonus marks if you also deploy your app to the internet. This will definitely be an asset in your future presentations or interviews. However, note that even if you deploy your app, **the TAs still run and test it locally**. This is to ensure that your submitted code is portable, runnable, and graded fairly.

**Note**: Major cloud provider have free plans. **Do not go with a paid option**. We will not be able to reimburse you!

## What to submit

You should push your entire Next.js project to your repo, accompanied by a `startup.sh` script and a `run.sh` script. These files should be located in the root folder of your repository.

The `startup.sh` script should run any preparation needed for your code to run in a new environment. It should create install all required packages via npm, and set up Docker images or containers. The `run.sh` script should start your server.

**Important note**: Before submitting, make sure that your startup and run scripts work well on the environment described earlier, and your collection can be imported into Postman without any issues. The TAs will run your application on clean instances of that environment. If you have worked with another operating system, it is your responsibility to double-check that your server works fine on our environment as well.
