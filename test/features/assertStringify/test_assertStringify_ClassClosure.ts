import typia from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ClassClosure = _test_assertStringify(
    "ClassClosure",
    ClassClosure.generate,
    (input) => typia.assertStringify(input),
    ClassClosure.SPOILERS,
);