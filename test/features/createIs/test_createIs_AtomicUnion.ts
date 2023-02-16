import typia from "typia";

import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_is } from "../internal/_test_is";

export const test_createIs_AtomicUnion = _test_is(
    "AtomicUnion",
    AtomicUnion.generate,
    typia.createIs<AtomicUnion>(),
    AtomicUnion.SPOILERS,
);
