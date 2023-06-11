import typia from "../../../src";

import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_validateClone } from "../../internal/_test_validateClone";

export const test_createValidateClone_ConstantAtomicSimple = _test_validateClone(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    typia.createValidateClone<ConstantAtomicSimple>(),
    ConstantAtomicSimple.SPOILERS,
);
