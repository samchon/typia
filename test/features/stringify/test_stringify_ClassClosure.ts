import typia from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ClassClosure = _test_stringify(
    "ClassClosure",
    ClassClosure.generate,
    (input) => typia.stringify(input),
);