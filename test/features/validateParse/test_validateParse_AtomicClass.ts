import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_validateParse_AtomicClass = _test_validateParse(
    "AtomicClass",
    AtomicClass.generate,
    (input) => typia.validateParse<AtomicClass>(input),
    AtomicClass.SPOILERS,
);
