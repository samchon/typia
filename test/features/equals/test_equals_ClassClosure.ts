import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_equals_ClassClosure = _test_equals(
    "ClassClosure",
    ClassClosure.generate,
    (input) => typia.equals<ClassClosure>(input),
);
