import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_createValidateParse_ConstantAtomicWrapper =
    _test_validateParse(
        "ConstantAtomicWrapper",
        ConstantAtomicWrapper.generate,
        typia.createValidateParse<ConstantAtomicWrapper>(),
        ConstantAtomicWrapper.SPOILERS,
    );
