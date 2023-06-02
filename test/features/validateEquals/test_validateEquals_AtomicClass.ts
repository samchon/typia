import typia from "../../../src";

import { AtomicClass } from "../../structures/AtomicClass";
import { _test_validateEquals } from "../../internal/_test_validateEquals";

export const test_validateEquals_AtomicClass = _test_validateEquals(
    "AtomicClass",
    AtomicClass.generate,
    (input) => typia.validateEquals(input),
);
