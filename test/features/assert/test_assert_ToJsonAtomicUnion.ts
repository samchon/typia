import TSON from "../../../src";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ToJsonAtomicUnion = _test_assert(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    (input) => TSON.assert(input),
);
