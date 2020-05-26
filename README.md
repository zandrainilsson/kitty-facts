# 😺 Kitty Facts 😺
Kitty Facts emerged from a project created at [Malmö University](https://mau.se/) as part of the course [Cross-platform Applications with Web Technologies](https://edu.mah.se/en/Course/DA355A), and was created by [Birger Norrman](https://github.com/BirgerNorrman), [Diana Klaar](https://github.com/dianaklaar), and [Zandra Nilsson](https://github.com/zandrainilsson). 

[Alex Wohlbruck](https://github.com/alexwohlbruck)’s API [cat-facts](https://alexwohlbruck.github.io/cat-facts/) and [TheCatAPI](https://docs.thecatapi.com/) by [Aden Forshaw](https://github.com/AdenForshaw), are being used in the project to fetch both random facts about cats and images of cats which can be saved as favorites by the user’s liking. 

### Collaboration within the project
When writing the code, the [VS Code](https://code.visualstudio.com/) extension [Live Share](https://visualstudio.microsoft.com/services/live-share/) has predominantly been used throughout the project. Which means that even though all group members have contributed with coding, all changes were made onto a local file of only one developer. Therefore the repository contributions are misleading.

## Requirements
Make sure you have [node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/get-npm) installed.

## Installation
1. `$ git clone https://github.com/zandrainilsson/kitty-facts.git`
2. `$ cd kitty-facts`
3. `$ npm install`
4. `$ npm start`
5.  All set! The Kitty Facts web application should now be running on [localhost:3000](http://localhost:3000).

## Choice of Technology
The web application was built with [React JS](https://reactjs.org/), with the main reason being that a lot of the job offers which requires applicants to have some prior knowledge of a framework, are looking for the ones which have it of React [1]. Specifically 78.1% requested prior knowledge of React, whereas only 21% were looking for persons with knowledge of [Angular JS](https://angularjs.org/), and only 0.8% of [Vue JS](https://vuejs.org/), according to TechMagic’s research [1]. In conclusion, React is obviously one of the most popular JavaScript frameworks [2]. 

Furthermore, even though Angular has its benefits and is absolutely the way to go when building solid, large-scale applications, it did not fit this project. Additionally, the framework has a variety of different structures which makes it harder to learn in comparison to both React and Vue [1]. Also, due to the time limit of this project being two weeks, it did not seem realistic to create the web application with Angular.

However, Vue could definitely have been used for this small-scale project as it has similar characteristics as Angular but is not as extensive [3]. Moreover, since the syntax of it is comparable to how we previously have been working, it actually seems like the correct choice of framework for the project. But as research shows, React is more popular in job offers, which is why we chose that specific framework. Additionally, some group members already had moderately knowledge of it, and due to the timeframe of the project it seemed like the best choice.

Lastly, since the application uses API-calls, the results of them can be presented dynamically by taking advantage of React’s Virtual DOM. Meaning that the site does not have to be reloaded when only a few elements have changed, and instead it is only just those that are being updated [4]. Which is a great functionality due to the nature of the application.

### Sources
[1] [https://medium.com/techmagic/reactjs-vs-angular5-vs-vue-js-what-to-choose-in-2018-b91e028fa91d](https://medium.com/techmagic/reactjs-vs-angular5-vs-vue-js-what-to-choose-in-2018-b91e028fa91d)
[2] [https://hackr.io/blog/best-javascript-frameworks](https://hackr.io/blog/best-javascript-frameworks) 
[3] [https://www.britwise.com/blog/reactjs-vs-vuejs-2019](https://www.britwise.com/blog/reactjs-vs-vuejs-2019)
[4] [https://www.codecademy.com/articles/react-virtual-dom](https://www.codecademy.com/articles/react-virtual-dom)
