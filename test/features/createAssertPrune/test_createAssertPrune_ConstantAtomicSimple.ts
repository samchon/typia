import typia from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_createAssertPrune_ConstantAtomicSimple = _test_assertPrune(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    typia.createAssertPrune<ConstantAtomicSimple>(),
    ConstantAtomicSimple.SPOILERS,
);