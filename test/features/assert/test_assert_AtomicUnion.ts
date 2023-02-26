import typia from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_AtomicUnion = _test_assert(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => typia.assert(input),
    AtomicUnion.SPOILERS,
);
