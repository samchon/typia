import TSON from "../../src";

console.log(
    TSON.createIs<Map<number, string> | Map<string, number>>().toString(),
);
