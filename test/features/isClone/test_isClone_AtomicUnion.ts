import typia from "typia";

import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_AtomicUnion = _test_isClone(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => typia.isClone(input),
    AtomicUnion.SPOILERS,
);
