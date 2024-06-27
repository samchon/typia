import typia, { tags } from "typia";

type Something = string & tags.Format<"uuid">;
const value: number = 3;

console.log(
  typia.reflect.name<string & tags.Format<"uuid">>(),
  typia.reflect.name<number & tags.Type<"uint32">>(),
  typia.reflect.name<Something, true>(),
  typia.reflect.name<Something, false>(),
  typia.reflect.name<typeof value>(),
  typia.reflect.name<typeof value, false>(),
  typia.reflect.name<
    string &
      tags.JsonSchemaPlugin<{
        "x-typia-something": true;
      }>
  >(),
);
