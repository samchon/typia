import typia from "../../../src";

import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_AtomicUnion = _test_assert(
    "AtomicUnion",
    AtomicUnion.generate,
    typia.createAssert<AtomicUnion>(),
    AtomicUnion.SPOILERS,
);
