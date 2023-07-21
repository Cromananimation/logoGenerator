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
        super();
        this.setColor(color);
    }

    render() {
        let rendered = `
            <svg width="300" height="250">
                <polygon points="150,20 275,220 25,220" fill="${this.color}" />
                <text x="100" y="150" fill="white">Triangle</text>
            </svg>
        `;
        return rendered;
    }
}

class Square extends Shape {
    constructor(color) {
        super();
        this.setColor(color);
    }

    render() {
        let rendered = `
            <svg width="300" height="250">
                <rect x="80" y="50" width="140" height="140" fill="${this.color}" />
                <text x="110" y="150" fill="white">Square</text>
            </svg>
        `;
        return rendered;
    }
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


module.exports = { Shape, Triangle, Square, Circle };