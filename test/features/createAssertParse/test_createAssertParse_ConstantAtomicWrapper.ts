import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_createAssertParse_ConstantAtomicWrapper = _test_assertParse(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    typia.createAssertParse<ConstantAtomicWrapper>(),
    ConstantAtomicWrapper.SPOILERS,
);
