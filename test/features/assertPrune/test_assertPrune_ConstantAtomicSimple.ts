import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_assertPrune_ConstantAtomicSimple = _test_assertPrune(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    (input) => typia.assertPrune(input),
    ConstantAtomicSimple.SPOILERS,
);
