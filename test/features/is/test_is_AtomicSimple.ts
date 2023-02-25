import typia from "../../../src";

import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_is } from "../internal/_test_is";

export const test_is_AtomicSimple = _test_is(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => typia.is(input),
    AtomicSimple.SPOILERS,
);
