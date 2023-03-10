import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_isStringify_AtomicClass = _test_isStringify(
    "AtomicClass",
    AtomicClass.generate,
    (input) => typia.isStringify(input),
    AtomicClass.SPOILERS,
);
