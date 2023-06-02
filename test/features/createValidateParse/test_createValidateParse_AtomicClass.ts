import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_createValidateParse_AtomicClass = _test_validateParse(
    "AtomicClass",
    AtomicClass.generate,
    typia.createValidateParse<AtomicClass>(),
    AtomicClass.SPOILERS,
);
