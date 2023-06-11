import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_createValidatePrune_ConstantAtomicWrapper =
    _test_validatePrune(
        "ConstantAtomicWrapper",
        ConstantAtomicWrapper.generate,
        typia.createValidatePrune<ConstantAtomicWrapper>(),
        ConstantAtomicWrapper.SPOILERS,
    );
