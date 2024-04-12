import typia from "typia";

const app = typia.json.application<[Record<string, string>], "3.1">();

console.log(JSON.stringify(app, null, 2));
