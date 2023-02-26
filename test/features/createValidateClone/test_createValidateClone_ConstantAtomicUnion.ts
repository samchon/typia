import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_createValidateClone_ConstantAtomicUnion = _test_validateClone(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    typia.createValidateClone<ConstantAtomicUnion>(),
    ConstantAtomicUnion.SPOILERS,
);
