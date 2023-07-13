import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_assert_AtomicClass = _test_assert(
    "AtomicClass",
    AtomicClass.generate,
    typia.createAssert<AtomicClass>(),
    AtomicClass.SPOILERS,
);
