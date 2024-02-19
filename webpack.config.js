module.exports = {
    entry: './lib/main.jsx',
    output: {
        filename: 'main.jsx',
        library: {
            type: 'umd',
            name: 'add',
        },
        // prevent error: `Uncaught ReferenceError: self is not define`
        globalObject: 'this',
    },
};