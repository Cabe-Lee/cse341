const awesomeFunction = (req, res, next) => {
    res.json('Leroy Bob Jankins. Hello World!');
};

const anotherPerson = (req, res, next) => {
    res.json('Look another person.');
};

module.exports = { awesomeFunction, anotherPerson }