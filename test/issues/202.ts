import TSON from "../../src";

type AnyTypeTry = { a: string };

const validation: TSON.IValidation = TSON.validateEquals<AnyTypeTry>({
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
