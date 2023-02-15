import typia from "typia";

import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_is } from "../internal/_test_is";

export const test_is_ToJsonAtomicSimple = _test_is(
    "ToJsonAtomicSimple",
    ToJsonAtomicSimple.generate,
    (input) => typia.is(input),
);
