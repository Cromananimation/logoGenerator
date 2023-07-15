const inquirer = require('inquirer')
const fs = require('fs')
const { Triangle, Square, Circle } = require('./library/shapes')
inquirer
    .prompt([
        {
            type: "input",
            name: 'text',
            message: 'Please enter your 3-character logo text.'
        },
        {
            type: "input",
            name: 'textColor',
            message: 'Please enter your desired text color as a name or hexadecimal value.'
        },
        {
            type: "list",
            name: 'shape',
            message: 'Please select your desired shape from the following list: ',
            choices: ["circle", "triangle", "square"]
            
        },
        {
            type: "input",
            name: 'shapeColor',
            message: 'Please enter your desired shape color as a name or hexadecimal value.'
        },
    ])
    .then((data) => {
        console.log(JSON.stringify(data))
        let specificShape;
        switch (data.shape) {
            case "triangle":
                specificShape = new Triangle()
                break;
            case "square":
                specificShape = new Square()
                break;
            case "circle":
                specificShape = new Circle()
                break;
        }
        specificShape.setColor(data.color)
        fileText = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n\n${specificShape.render()}\n\n  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>\n\n</svg>`
        fs.writeFile("./examples/logo.svg", fileText, (err) => {err ? console.log(err) : console.log('success!')})
    })