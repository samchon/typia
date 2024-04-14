import typia, { tags } from "typia";

const app =
  typia.json.application<
    [
      string & tags.Format<"uuid">,
      number & tags.Minimum<3>,
      number & tags.Type<"int32">,
    ]
  >();
console.log(app.schemas);
