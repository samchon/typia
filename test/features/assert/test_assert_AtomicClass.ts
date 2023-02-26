import typia from "../../../src";
import { AtomicClass } from "../../structures/AtomicClass";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_AtomicClass = _test_assert(
    "AtomicClass",
    AtomicClass.generate,
    (input) => typia.assert(input),
    AtomicClass.SPOILERS,
);
