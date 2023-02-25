import typia from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ConstantAtomicUnion = _test_validateParse(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    typia.createValidateParse<ConstantAtomicUnion>(),
    ConstantAtomicUnion.SPOILERS,
);
