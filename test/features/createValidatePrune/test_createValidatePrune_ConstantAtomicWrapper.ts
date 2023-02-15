import typia from "typia";

import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_ConstantAtomicWrapper =
    _test_validatePrune(
        "ConstantAtomicWrapper",
        ConstantAtomicWrapper.generate,
        typia.createValidatePrune<ConstantAtomicWrapper>(),
        ConstantAtomicWrapper.SPOILERS,
    );
