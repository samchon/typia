import typia from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ClassClosure = _test_isStringify(
    "ClassClosure",
    ClassClosure.generate,
    typia.createIsStringify<ClassClosure>(),
    ClassClosure.SPOILERS,
);
