import typia from "../../../src";

import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ConstantAtomicUnion = _test_assert(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input) => typia.assert(input),
    ConstantAtomicUnion.SPOILERS,
);
