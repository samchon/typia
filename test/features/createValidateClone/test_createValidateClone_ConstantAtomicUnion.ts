import typia from "../../../src";

import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ConstantAtomicUnion = _test_validateClone(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    typia.createValidateClone<ConstantAtomicUnion>(),
    ConstantAtomicUnion.SPOILERS,
);
