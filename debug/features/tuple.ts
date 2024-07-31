import typia from "typia";

console.log(
  typia.json.application<[[number, string]], "3.0">().schemas[0],
  typia.json.application<[[number, string]], "3.1">().schemas[0],
  typia.json.application<[[number, string, ...boolean[]]], "3.1">().schemas[0],
);
