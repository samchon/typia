import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_ConstantAtomicWrapper = _test_assertParse(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    TSON.createAssertParse<ConstantAtomicWrapper>(),
    ConstantAtomicWrapper.SPOILERS,
);
