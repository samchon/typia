import typia from "typia";

const stringify = typia.json.createStringify<number[]>();
console.log(stringify.toString());
console.log(stringify([Infinity]));
