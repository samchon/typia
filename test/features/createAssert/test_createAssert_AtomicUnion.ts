import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_assert_AtomicUnion = _test_assert(
    "AtomicUnion",
    AtomicUnion.generate,
    typia.createAssert<AtomicUnion>(),
    AtomicUnion.SPOILERS,
);
