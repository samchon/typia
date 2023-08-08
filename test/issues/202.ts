import typia from "typia";

type AnyTypeTry = { a: string };

const validation: typia.IValidation = typia.validateEquals<AnyTypeTry>({
    a: "something",
    b: "more",
    c: "and",
    d: "more",
});

console.log(
    validation.errors
        .filter((err) => err.expected === "undefined")
        .map((err) => err.path),
);
