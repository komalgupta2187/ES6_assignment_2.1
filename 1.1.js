function Person(name) {
    this.name = name;
}
Person.prototype.prefixName = function (arr) {
    return arr.map((character) => {
        return this.name + character;
    });
};

let Komal = new Person('Komal');
console.log(Komal.prefixName([1, 2, 3]));


