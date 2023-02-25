import typia from "../../../src";

import { AtomicClass } from "../../structures/AtomicClass";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_AtomicClass = _test_validateParse(
    "AtomicClass",
    AtomicClass.generate,
    (input) => typia.validateParse<AtomicClass>(input),
    AtomicClass.SPOILERS,
);
