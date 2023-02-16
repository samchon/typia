import typia from "typia";

import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ConstantAtomicWrapper = _test_validateClone(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    typia.createValidateClone<ConstantAtomicWrapper>(),
    ConstantAtomicWrapper.SPOILERS,
);
