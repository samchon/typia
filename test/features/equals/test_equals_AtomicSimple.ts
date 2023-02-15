import typia from "typia";

import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_AtomicSimple = _test_equals(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => typia.equals(input),
);
