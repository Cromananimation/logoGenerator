const { Triangle, Square, Circle } = require('../library/shapes')

describe('Triangle Tests', () => {
    test('should return a triangle with selected color', () => {
        //initialize whatever youre testing
        const thing = new Triangle()
        thing.setColor("blue")
        //set some attributes if need be so you can check its constant, then expect
        expect(thing.render("triangle")).toEqual('blue')
    })
})