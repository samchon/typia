import typia from "typia";

import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ConstantAtomicWrapper =
    _test_validateParse(
        "ConstantAtomicWrapper",
        ConstantAtomicWrapper.generate,
        typia.createValidateParse<ConstantAtomicWrapper>(),
        ConstantAtomicWrapper.SPOILERS,
    );
