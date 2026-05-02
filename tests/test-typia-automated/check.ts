import typia from "typia";
const v = typia.createIs<{ x: number }>();
console.log("---OUTPUT---");
console.log(v.toString().substring(0, 400));
