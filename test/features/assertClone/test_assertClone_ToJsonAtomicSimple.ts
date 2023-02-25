import typia from "../../../src";

import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ToJsonAtomicSimple = _test_assertClone(
    "ToJsonAtomicSimple",
    ToJsonAtomicSimple.generate,
    (input) => typia.assertClone(input),
);
