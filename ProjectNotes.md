# Eleanor: A Digital Rogerian Therapist

## Inspiration

When I was 11 years old, in the late 1960s, my Dad, a programmer at the Rand Corporation, took me to work one weekend. He got out a large magnetic tape and loaded it in a drive. He sat me down in front of a printer, and I played a game called "Eliza." It was different from other computer games I played there, like "Blackjack."

Eleanor is the child of [Eliza](https://en.wikipedia.org/wiki/ELIZA). She is a
Rogerian Therapist. Rogerian therapy is based on the idea that people can solve problems through self-analysis. The role of a Rogerian therapist, who often uses language that restates what the client says in different words, is to help the client build on their thoughts.

Eliza was built using string matching and pattern recognition, which areearly forms of language analysis. In this project, Eleanor, I want to use the new large language models, specifically, Google Gemini, to create the Rogerian conversation.

## What it does

Eleanor is a web application that uses the Google Gemini language model API toprovide responses base on user prompts. An intial "on load" prompt informs the model of their role and a brief description of what a Rogerian therpaist does for its client.
 
>"You are a Rogerian psychotherapist named Eleanor. You are communicating with a patient who is reflecting on personal problems. You want to help her to reflect and determine her own solutions. Start by introducing yourself. Here are some notes on Rogerian psychotherapy: Rogerian psychotherapy, also known as person-centered therapy or client-centered therapy, is a type of psychotherapy that helps clients discover their own solutions and become their own therapists.How are you today?"

The Client and Eleanor then begin a conversation to work through the Clients thoughts, problems, and goals.

## How we built it

The is a full stack applications.  The front end is build with React and the server side uses Netlify functions to call the Gemini API. The code is deployed on Netlify. The code is stored on GitHub.   I'm using computing resources that are provided for free. 

## Challenges I ran into

I worked independently on this project. I think this project would have benefited from a team approach. I know from experience working on teams that
there would have been more innovation and fun with a team.

I haven't created an application with a Conversational User Interface.  There are 
some front end challenges like making sure that when there are many inputs from Client and Therapist,  the most recent inputs are the first seen.  

I have experience coding front end applications, but I'm not a designer so I struggled a little with the design and colors.


### AI Responses in a Therapy Session

I am concerned about the fact that I don't have total control over what the AI model will respond with, especially because I am creating a "therapy" application. If "clients" come to the session with problems that delve into areas that the model is not equipped to flag as a big problem, like suicidal tendencies or drug problems, I may not be able to intervene.

My solution for this is to test the language submitted by the client against a list of words representing problems that I don't want the AI to responsd to. If I find any of these words, I will reject the client's statement with a notice about seeking professional help.

### Rules

I'm going to add a list of "Rules" to the home pages that discuss the nature of this therapy. It is intended to help people talk through problems with school, work, careers, and relationships. I will also notify them that I am not storing any of their conversation, but that they should not reveal names and personal information.

### Conversational User Interface (CUI)

I've worked as a full-stack developer, and have experience coding front-end user interfaces. I find many user interfaces complicated and faulty. I like the idea of just telling the application what to do with language. I'm used to communicating with an OS using a CLI. Could we become more language-oriented in our user interfaces?

I found developing an interface that made it easy to see the user input and the response input challenging. I've become aware of the term "CUI" as opposed to "GUI" in describing the **Conversational User Interface** as opposed to the **Graphical User Interface**. Given the issues with rendering web apps on multiple devices, it might be nice to rely on language rather than GUI components.

### Using the Google Gemini API

I anticipated using the Google API would be my biggest challenge, but it was the simplest. I enjoy the simplicity of this API.

## Accomplishments that I'm proud of

It always feels good to put together a full stack application. This is a fairly simple application with just three API calls:

1.  initialize a welcome response
2.  get a response from a user prompt
3.  convert html to text to enable downloading a text version of the conversation transcript

I like my idea of creating a modern day **Eliza**.

I'm please to learn more about creating a conversational UI. I like working in
a CLI better than a GUI, and I'm thinking the more that we can just tell our
web pages what to do instead of trying to figure out the current set of buttons
and widget, the better it will be.

## What I learned

I learned how to:

- get a Google Gemini API Key
- call the Google Gemini API and get a text response that contains Markdown
- use a React component to turn the Markdown into rendered HTML
- create a running transcript of the conversation and make it downloadable
- do my own input word checking to prevent an API call that could end up in an unwanted conversation theme
- read how the Gemini API has some options that could prevent an unwanted conversation theme
- how to limit output to 2000 tokens (without this I would run out of tokens and the responses were getting too long)

## What's next for Eleanor

I would start with some code reactoring. I think I could make the code in this project better by refactoring it and using Typescript.

I want to learn to more about what I can do with the Gemini API. I see there are many settings. I'd like to learn more about what they do. I'm not sure if this wouldn't require a lot of testing on my part to fully understand, but I would like to include it in Eleanor.

I'd like to develop the Home page "Waiting Room". If I added a database, I could make appointments and have more control of the access to Eleanor. I could also keep
track of Clients and looks for ways to see if they were progressing in their problem solving with Eleanor.
