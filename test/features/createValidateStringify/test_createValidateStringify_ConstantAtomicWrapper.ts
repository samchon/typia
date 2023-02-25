import typia from "../../../src";

import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ConstantAtomicWrapper = _test_validateStringify(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    typia.createValidateStringify<ConstantAtomicWrapper>(),
    ConstantAtomicWrapper.SPOILERS,
);
