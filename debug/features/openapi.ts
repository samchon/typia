import typia, { tags } from "typia";

type X = 3 &
  tags.JsonSchemaPlugin<{
    title: "something";
    description: "nothing";
  }>;

console.log(
  JSON.stringify(
    typia.json.application<
      [
        X,
        boolean &
          tags.JsonSchemaPlugin<{
            title: "boolean";
            description: "hope not to be union of boolean literal types";
          }>,
      ]
    >(),
    null,
    2,
  ),
  typia.createIs<boolean>().toString(),
  typia.reflect.metadata<[boolean]>().metadatas[0],
);
