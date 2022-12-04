import TSON from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ConstantAtomicUnion = _test_validateParse(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    TSON.createValidateParse<ConstantAtomicUnion>(),
    ConstantAtomicUnion.SPOILERS,
);
