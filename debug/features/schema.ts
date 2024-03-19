import typia, { tags } from "typia";

type Monetary<Value extends string> = tags.TagBase<{
  target: "number";
  kind: "monetary";
  value: Value;
  schema: {
    "x-monetary": Value;
  };
}>;

type Placeholder<Value extends string> = tags.TagBase<{
  target: "string";
  kind: "placeholder";
  value: Value;
  schema: {
    "x-placeholder": Value;
  };
}>;

console.log(
  JSON.stringify(
    typia.json.application<
      [
        number & Monetary<"dollar">,
        string &
          tags.Format<"email"> &
          Placeholder<"Insert your email address please">,
      ]
    >(),
    null,
    2,
  ),
);
