import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_validatePrune_ConstantAtomicUnion = _test_validatePrune(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input) => typia.validatePrune<ConstantAtomicUnion>(input),
    ConstantAtomicUnion.SPOILERS,
);
