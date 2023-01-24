import typia from "../../src";

interface Something {
    values: number[];
}
console.log(typia.message<Something>());
console.log("\n");
console.log(typia.message<number[]>());
console.log("\n");
console.log(typia.message<number | number[]>());
