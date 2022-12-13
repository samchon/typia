import typia from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ClassClosure = _test_validateStringify(
    "ClassClosure",
    ClassClosure.generate,
    (input) => typia.validateStringify(input),
    ClassClosure.SPOILERS,
);
