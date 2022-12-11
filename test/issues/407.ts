import TSON from "../../src";

type X = [boolean, number, ...string[]];

const app = TSON.metadata<[X]>();
// console.log(JSON.stringify(app, null, 4));
