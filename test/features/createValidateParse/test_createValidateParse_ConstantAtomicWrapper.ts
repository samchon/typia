import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ConstantAtomicWrapper =
    _test_validateParse(
        "ConstantAtomicWrapper",
        ConstantAtomicWrapper.generate,
        TSON.createValidateParse<ConstantAtomicWrapper>(),
        ConstantAtomicWrapper.SPOILERS,
    );
