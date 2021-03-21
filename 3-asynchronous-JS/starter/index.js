const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const superagent = require('superagent');

const readFilePromise = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) reject('I could not find that file');
      resolve(data);
    });
  });
};

const writeFilePromise = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('Could not write a file');
      resolve('Success!');
    });
  });
};

readFilePromise(`${__dirname}/dog.txt`)
  .then((data) => {
    console.log(`Breed:`, data);
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then((res) => {
    console.log(res.body.message);
    return writeFilePromise('dog-img.txt', res.body.message);
  })
  .then(() => {
    console.log('Random dog image is saved!');
  })
  .catch((err) => {
    console.log(err);
  });
