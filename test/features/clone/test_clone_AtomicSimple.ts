import typia from "typia";

import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_AtomicSimple = _test_clone(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => typia.clone(input),
);
