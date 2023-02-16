import typia from "typia";

import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_AtomicSimple = _test_clone(
    "AtomicSimple",
    AtomicSimple.generate,
    typia.createClone<AtomicSimple>(),
);
