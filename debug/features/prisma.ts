import typia from "typia";

interface JsonArray extends Array<JsonArray> {
  children?: JsonArray;
}
const app = typia.json.application<[JsonArray]>();
console.log(JSON.stringify(app, null, 2));
