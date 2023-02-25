import typia from "../../../src";

import { AtomicClass } from "../../structures/AtomicClass";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_AtomicClass = _test_validateParse(
    "AtomicClass",
    AtomicClass.generate,
    typia.createValidateParse<AtomicClass>(),
    AtomicClass.SPOILERS,
);
