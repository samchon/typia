import typia from "typia";

console.log(
  typia.is<boolean>(true),
  typia.assert<string>("something"),
  typia.json.stringify<number>(3),
);
