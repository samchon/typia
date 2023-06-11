import typia from "../../../src";

import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_assert } from "../../internal/_test_assert";

export const test_assert_ConstantAtomicSimple = _test_assert(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    (input) => typia.assert(input),
    ConstantAtomicSimple.SPOILERS,
);
