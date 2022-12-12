import typia from "../../../src";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ToJsonAtomicSimple = _test_assert(
    "ToJsonAtomicSimple",
    ToJsonAtomicSimple.generate,
    (input) => typia.assert(input),
);
