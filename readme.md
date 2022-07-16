
<h1 align="center">🛠️ Unit Testing in Node.JS</h1>
<p align="center">
  <i>A quick example of testing in Node.JS</i>
</p>

<br>

<p align="center">
  <a href="#">
   <img src="https://api.travis-ci.org/Lissy93/quick-example-of-testing-in-nodejs.svg" alt="Travis">
  </a>
  <a href="https://snyk.io/test/github/Lissy93/quick-example-of-testing-in-nodejs">
    <img src="https://snyk.io/test/github/Lissy93/quick-example-of-testing-in-nodejs/badge.svg" alt="Known Vulnerabilities">
  </a>
    <a href="#">
    <img src="http://inch-ci.org/github/Lissy93/quick-example-of-testing-in-nodejs.svg?branch=master" alt="Docs Rank">
  </a>
    <a href="https://www.codacy.com/gh/Lissy93/quick-example-of-testing-in-nodejs/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Lissy93/quick-example-of-testing-in-nodejs">
    <img src="https://app.codacy.com/project/badge/Grade/3f14d24ffafe4200a643f4aba34fc2f3" alt="Code Quality">
  </a>
</p>


## Intro
This is a quick example project to show how a test environment can be setup in Node.js

It includes the following

- [Mocha](http://mochajs.org/) - *testing framework*
- [Chai](http://chaijs.com/) - *assertion library*
- [Istanbul](https://github.com/gotwarlost/istanbul) - *coverage testing*
- [SinonJs](http://sinonjs.org/) - *stubs and splices for mocking data*


The following online tools are used to monitor results

- [Travis CI](https://travis-ci.org/) - *Continuous Integration*
- [David DM](https://david-dm.org/) - *Dependency Management*
- [Codacy](https://www.codacy.com/) - *Automated Code Quality Reviews*
- [Inch CI](https://inch-ci.org/) - *Documentation Reviews*

---

## The Project
The project is a very simple script that pulls current weather data from OpenWeatherMap
for your location, it then analyses it and lists which items (umbrella, icecream, jumper...)
you will need for the current weather.


### Installation
- Navigate into your working directory, run the following commands:
- ```git clone https://github.com/Lissy93/quick-example-of-testing-in-nodejs.git``` to clone repo
- ```cd quick-example-of-testing-in-nodejs``` to navigate into project
- ```npm install``` to install the dependencies

### Running
- ```npm start``` will run the main file (app.js) and display results
- ```node app --location Newcastle``` will run app.js for a custom location, e.g. Newcastle
- ```npm test``` will run the Mocha tests, output results and generate reports
- ```npm run cover``` will run the Istanbul coverage tests and output results and generate reports

---

## Screenshots

<p align="center">
<i>Command Line Output: Tests Passing</i><br>
<img src="https://i.ibb.co/WDpBStz/better-test3.png" />
</p>

<p align="center">
<i>Web Report: Some Tests Failing</i><br>
<img src="https://i.ibb.co/93CdGjG/bad-test1.png" />
</p>

<p align="center">
<i>Web Report: All Tests Passing</i><br>
<img src="https://i.ibb.co/nCdHFs4/better-test2.png" />
</p>

---

<p  align="center">
  <i>© <a href="https://aliciasykes.com">Alicia Sykes</a> 2011 - 2017</i><br>
  <i>Licensed under <a href="https://gist.github.com/Lissy93/143d2ee01ccc5c052a17">MIT</a></i><br>
  <a href="https://github.com/lissy93"><img src="https://i.ibb.co/4KtpYxb/octocat-clean-mini.png" /></a>
</p>
