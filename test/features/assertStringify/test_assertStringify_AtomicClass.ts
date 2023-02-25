import typia from "../../../src";

import { AtomicClass } from "../../structures/AtomicClass";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_AtomicClass = _test_assertStringify(
    "AtomicClass",
    AtomicClass.generate,
    (input) => typia.assertStringify(input),
    AtomicClass.SPOILERS,
);
