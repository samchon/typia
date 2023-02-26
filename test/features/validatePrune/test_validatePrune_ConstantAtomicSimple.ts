import typia from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_ConstantAtomicSimple = _test_validatePrune(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    (input) => typia.validatePrune(input),
    ConstantAtomicSimple.SPOILERS,
);
