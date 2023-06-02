import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_validateStringify_AtomicClass = _test_validateStringify(
    "AtomicClass",
    AtomicClass.generate,
    (input) => typia.validateStringify(input),
    AtomicClass.SPOILERS,
);
