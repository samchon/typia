import typia from "typia";

type Dolloar = typia.tags.TagBase<{
    kind: "dollar";
    target: "string";
    value: undefined;
    validate: `$input[0] === "$" && !isNaN(Number($input.substring(1).split(",").join("")))`;
}>;

type Postfix = typia.tags.TagBase<{
    kind: "postfix";
    target: "string";
    value: undefined;
    validate: `$input.endsWith($value)`;
}>;

typia.createIs<string & Postfix>();
