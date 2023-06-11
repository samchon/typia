import typia from "../../../src";

import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_is } from "../../internal/_test_is";

export const test_is_AtomicUnion = _test_is(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => typia.is(input),
    AtomicUnion.SPOILERS,
);
