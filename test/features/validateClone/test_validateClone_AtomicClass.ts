import typia from "../../../src";
import { AtomicClass } from "../../structures/AtomicClass";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_AtomicClass = _test_validateClone(
    "AtomicClass",
    AtomicClass.generate,
    (input) => typia.validateClone(input),
    AtomicClass.SPOILERS,
);