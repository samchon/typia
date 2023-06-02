import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_createAssertPrune_ConstantAtomicWrapper = _test_assertPrune(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    typia.createAssertPrune<ConstantAtomicWrapper>(),
    ConstantAtomicWrapper.SPOILERS,
);
