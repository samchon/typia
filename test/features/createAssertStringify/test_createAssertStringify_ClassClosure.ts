import typia from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ClassClosure = _test_assertStringify(
    "ClassClosure",
    ClassClosure.generate,
    typia.createAssertStringify<ClassClosure>(),
    ClassClosure.SPOILERS,
);