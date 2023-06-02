import typia from "../../../src";

import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_assertPrune } from "../../internal/_test_assertPrune";

export const test_assertPrune_ConstantAtomicSimple = _test_assertPrune(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    (input) => typia.assertPrune(input),
    ConstantAtomicSimple.SPOILERS,
);
