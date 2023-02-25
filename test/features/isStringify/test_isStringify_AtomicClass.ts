import typia from "../../../src";

import { AtomicClass } from "../../structures/AtomicClass";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_AtomicClass = _test_isStringify(
    "AtomicClass",
    AtomicClass.generate,
    (input) => typia.isStringify(input),
    AtomicClass.SPOILERS,
);
