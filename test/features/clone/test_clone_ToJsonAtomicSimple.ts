import typia from "typia";

import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_ToJsonAtomicSimple = _test_clone(
    "ToJsonAtomicSimple",
    ToJsonAtomicSimple.generate,
    (input) => typia.clone(input),
);
