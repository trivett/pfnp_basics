# Programming for Non-Programmers — The Basics

### Begin, introductions

Instructor Intro, class intro.

Students introduce themselves.

### Intro to programming and the internet



High level overview of various programming languages and what they do.

Essential Terminology

------

**Learning Objective**: Learn the essential words and concepts that are used on a daily basis by engineers and project/product managers on the job.

------

Here are some words and concepts that will hopefully give you a more holistic view of the more technical aspects of the industry.

#### Define: Program

------

Discrete, highly logical and explicit instructions that are parsed and executed by a computer.

We call this set of human-readable instructions **source code**, or colloquially, a **computer program**.

**Compilers** can take this source code and transform it into **machine code**, a representation of the source that can be executed by the computer's **central processing unit** or **CPU**.

Not all programs are compiled though, some are **interpreted**. The difference is that compiled languages need a step where the source code is physically transformed into machine code. However, with an interpreted language, this additional step is **excluded** in favor of **parsing** and **executing** the source code directly when the program is run.

Speaking of source code, sometimes programmers, even ones acting on behalf of corporate giants like Apple, publish the source code for their programs. This is called **open source**. 

#### How programs are written

------

All programs are composed with a collection of **fundamental** concepts that, when combined, can essentially dictate a wide variety of tasks a computer can perform.

Here are a collection of these most important concepts:

- **Declarations**: typically, we can store and retrieve data in our programs by associating them with intermediary values that we call **variables**
- **Expressions**: we use expressions to evaluate stuff. For example, **2 + 2** is an example of an expression that will **evaluate** a value, namely 4.
- **NOTE**: typically we can use expressions and declarations in tandem to perform complex tasks. For instance, we can reference a variable we declared in an expression to help us evaluate new values which can then be stored.
- **Statements**: statements will use expressions and declarations to alternate a program's **control flow**, which is essentially the order in which declarations, expressions, and other statements are executed.

Aside from these fundamental concepts, we also talk a lot about this idea of **algorithms**. An **algorithm** is simple a series of declarations, expressions, and statements that can be used over and over again to solve well defined problems of a certain type.

People tend to talk about algorithms like they are mysterious forces of nature, but I guarantee that you know a few algorithms yourself.

For example, we can implement an algorithm that converts temperature from **fahrenheit** to **celsius**. It would look something like this:

1. **Declare** F = 32;
2. **Expression** ( **F** - 32 ) / 1.8;
3. **Declare** C = **Evaluated** expression from **[2]**

This is a form of **pseudo** code where we define the steps a computer program — **any** — computer program can take to convert **fahrenheit** to **celsius**.

The beauty of programming is that all of it revolves around the same key set of concepts and ideas. For this reason, we do not need to specify any **particular programming language ** when discussing the functional aspects of a program.

#### Define: Programming languages

------

A programming language is a series of **grammar** and **rules** that we can define towards writing source code.

Languages are effectively different approaches towards communicating the same ideas in programming. Essentially, we can communicate in say both **French** and **English**, what mainly differs is the structure of our sentences and the actual words and sounds themselves.

The **same analogy** can be made with programming languages.

#### Examples of programming languages

------

There are many. Way too many.

Here are some of the most popular ones, though.

1. **JavaScript**: this language is interpreted.
2. **Python**: this language is interpreted.
3. **Java**: this language is compiled
4. **Ruby**: this language is interpreted.
5. **C/C++**: this language is compiled.

These languages all build on the same concepts defined above; the main difference lies in **how** they are run (compiled vs interpreted) and also **how** they are used.

In general, anything programmable can be programmed in each of the languages defined above. However, some languages are better suited for certain tasks above others.

For example, to perform web programming on the front-end, you'll want to write JavaScript. This is because all browsers collectively support running javascript within it's environment.

#### What is web development?

------

The use of programming languages and concepts towards producing a system that listens to user requests over the internet and serves back HTML, CSS, and interaction code to the client.

#### What is the difference between a web site and web app

------

Web sites are more **static**. Think of them as sort of like interactive brochures. They typically don't hold any state and are usually just information.

A web app is more like an iOS or Android app. It holds state, does not refresh itself and in general **does something** vs **showing something**.

#### What are the stages of web development

------

Depends on the methodology used by team. Typically, there is a UX phase, a Design phase, a Development phase bundled with extensive QA. This was the process used in the consulting firm I used to work in.

For a startup, the process is similar, however there is a lot more room for iteration and testing out ideas by putting something up for users to use and deliver feedback.

#### What is the difference between front-end and back-end web development

------

**Front end**: Client side interactions and structure. This includes stuff like iOS apps and whatever you load in browser.

**Back end**: Server side, data storage and retrival. Needs a client **of some sort** (not necessarily a browser) to work. Deals with storing and retriving information.



# Let's edit some actual HTML and CSS



Clone my about me starter

Open as a directory in Sublime Text by dragging it onto the icon in the doc.

Explain each html tag and how they work.

Make OL into UL	



1. Change the **title** of the page to your name.
2. Change the **source** (`src`) attribute of the image in the header - replace it with an image of your choosing.
3. Change the default **font-family** of your website. Consider using the fonts found at [CSS Font Stack](http://www.cssfontstack.com/). *Feeling adventurous? Try including an external font from Font CDN or Google Fonts!*
4. Change the **background image** of the website. Look at the CSS rule for the `body` of your document. Where might you make this change?
5. Increase the space around your header's image. What happens when you change the padding? The margin?

Bonus:

1. Investigate your CSS. Change your style rules so that a line appears underneath your links (`a` tags) when they're hovered over.
2. Add padding to your divs with a class of `project`. The divs should have 10px of padding on the top and bottom, and no padding on the right and left.
3. Write a CSS rule that targets `p` tags located inside divs with a class of `project`. Add a margin aroung each nested `p`tag.

## Typography

95% of web design is typography, let's get some nice fonts.

Show them Google Fonts.

Why web fonts? Because you want to guarantee that even if someone doesn't have a font, your stuff will appear as you like.

Pick Cabin and Lobster — They can pick whatever.

```css
@import url('https://fonts.googleapis.com/css?family=Cabin');
@import url('https://fonts.googleapis.com/css?family=Lobster');

h1, h2 {
  font-family: 'Lobster', cursive;
}

p, li {
  font-family: 'Cabin', sans-serif;
}

```



## Body Background

```css
body {
  background-image: url('../images/abstract-mosaic-background.png');
}
	
```



## Wrapper

Make it nicer by putting things in the middle.

```css
.wrapper {
  width: 960px;
  margin: 0 auto;
}

```



## Header

```css
header {
  background: #595959;
  color: #91C499;
  padding: 15px 30px;
  text-align: center;
}

header img {
  width: 50%;
  border-radius: 15px;
}
```



## Main Content

```css
.main-content {
  background: #808F85;
  padding: 10px 0;
  border-top: 2px solid #CFD11A;
}
```









```css
@import url('https://fonts.googleapis.com/css?family=Cabin');
@import url('https://fonts.googleapis.com/css?family=Lobster');

h1, h2 {
  font-family: 'Lobster', cursive;
  color: #CFD11A;
}

p, li {
  font-family: 'Cabin', sans-serif;
}

body {
  background: url('../images/abstract-mosaic-background.png') no-repeat center center fixed;
  background-size: cover;
}

.wrapper {
  width: 960px;
  margin: 0 auto;
}

header, footer {
  background: #595959;
  color: #91C499;
  padding: 15px 30px;
  text-align: center;
}

header img {
  width: 50%;
  border-radius: 15px;
}

.main-content {
  background: #808F85;
  padding: 10px 0;
  border-top: 2px solid #CFD11A;
}

.main-content ul {
  list-style-type: none;
  padding-left: 0;
}
.main-content ul li {
  padding: 10px;
  text-align: center;
}

a {
  color: #CFD11A;
  text-decoration: none;
}
.main-content p {
  margin: 10px 40px;
}

#projects {
  background: #808F85;
  margin: 0 auto
}

.clearfix:after {
  content:"";
  display:table;
  clear:both;
}

.project {
  width: 30%;
  display: inline-block;
  background: #F2E9DC;
  margin: 1.66%;
  border-radius: 15px;
  float: left;
}

.project h2 {
  text-align: center;
}

.project img {
  max-width: 100%;
}




```





## Converting temperatures in code

```javascript
let f = 100;
c = (f -32) / 1.8;
console.log(c);
```



## Reusable code

```javascript
let f = 100;

function convertToCelsius(farenheit){
  let c = (farenheit -32) / 1.8;
  return c
}

convertToCelsius(f);

```



If time permits, challenge students to do the pythagorean theorem on their own.