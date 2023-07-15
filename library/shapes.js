class Shape {
    constructor() {
        this.color = 'red'
    }

    setColor(color) {
        this.color = color
    }
    render() {
        return ""
    }
}

class Triangle extends Shape {
    constructor(color) {
        super()
        this.setColor(color)
    }
    render(){return this.color}
}
class Square extends Shape {
    constructor(color) {
        super()
        this.setColor(color)
    }
    render(){return this.color}
}
class Circle extends Shape {
    constructor(color) {
        super()
        this.setColor(color)
    }
    render(){
        let rendered = `  <circle cx="150" cy="100" r="80" fill="${this.color}" />`
        return rendered
    }
}

module.exports = { Shape, Triangle, Square, Circle }