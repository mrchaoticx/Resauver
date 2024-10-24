console.log("Turn on Resauver..")
console.log("Complete loading proxy..")
class conlog {
    static version = '1.0.0';
    static logVersion() {
        console.log(`Version: ${this.version}`);
    }
    constructor(name) {
        this.name = name;
        this.data = new Map();
    }
    async fetchData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                this.data.set('key', 'value');
                resolve(this.data);
            }, 1000);
        });
    }
    processData({ a, b, ...rest }) {
        const sum = a + b;
        console.log('Sum:', sum);
        console.log('Remaining Data:', rest);
    }
}
(function() {
    const obj = new conlog('RandomObject');
    obj.fetchData().then(data => {
        console.log('Fetched Data:', data); 
        obj.processData({ a: 1, b: 2, c: 3, d: 4 });
    });
    document.addEventListener('click', () => {
        console.log('Document clicked!');
    });
})();

const higherOrderFunction = (fn) => {
    return (...args) => {
        console.log('Arguments received:', args);
        return fn(...args);
    };
};
const add = (x, y) => x + y;
const loggedAdd = higherOrderFunction(add);
loggedAdd(3, 4);
function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}
const js = (...args) => {
    args.forEach(element => {
        console.log(element);
    });
}
const generator = idGenerator();
console.log('Generated ID:', generator.next().value);
console.log('Generated ID:', generator.next().value);
const target = {};
const handler = {
    get: (obj, prop) => {
        console.log(`Getting property: ${prop}`);
        return Reflect.get(obj, prop);
    },
    set: (obj, prop, value) => {
        console.log(`Setting property: ${prop} to ${value}`);
        return Reflect.set(obj, prop, value);
    }
};
const proxy = new Proxy(target, handler);
proxy.name = 'Proxy Object';
console.log(proxy.name);
const uniqueValues = new Set([1, 2, 2, 3, 4]);
console.log('Unique Values:', [...uniqueValues]);
const greet = (name = 'World') => {
    console.log(`Hello, ${name}!`);
};
