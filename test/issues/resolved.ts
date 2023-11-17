import typia from "typia";

type Union = Date | number | string | Buffer | null;
console.log(
  typia.createRandom<Union>().toString(),
  typia.json.createStringify<Union>().toString(),
);
