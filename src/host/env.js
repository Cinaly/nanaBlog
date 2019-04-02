// NODE_ENV = 0 开发
// NODE_ENV = 1 [test]生产
// NODE_ENV = 1 [beta]生产
// NODE_ENV = 1 [release]生产

const NODE_ENV = {};
switch (process.env.NODE_ENV) {
    case 'development':
        console.log(1);
        NODE_ENV.dev   = true;
        NODE_ENV.model = 'dev';
        NODE_ENV.id = 0;
        break;
    case 'release':
        console.log(2);
        NODE_ENV.dev   = false;
        NODE_ENV.model = 'release';
        break;
}
console.log('process.env', process.env);
NODE_ENV.id = process.env.NODE_ENV;
export default NODE_ENV;
