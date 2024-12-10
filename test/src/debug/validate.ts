import typia from "typia";

console.log(
  typia.validate<number>("one"),
  typia.json.validateStringify<string>(2),
  typia.protobuf.validateEncode<{
    id: string;
  }>({ id: 3 }),
);
