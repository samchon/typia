import typia from "typia";

import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_AtomicSimple = _test_assert(
    "AtomicSimple",
    AtomicSimple.generate,
    typia.createAssert<AtomicSimple>(),
    AtomicSimple.SPOILERS,
);
