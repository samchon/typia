import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_isPrune_ConstantAtomicSimple = _test_isPrune(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    (input) => typia.isPrune<ConstantAtomicSimple>(input),
    ConstantAtomicSimple.SPOILERS,
);
