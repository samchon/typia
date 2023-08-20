import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_validatePrune_ConstantAtomicSimple = _test_validatePrune(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    (input) => typia.validatePrune<ConstantAtomicSimple>(input),
    ConstantAtomicSimple.SPOILERS,
);
