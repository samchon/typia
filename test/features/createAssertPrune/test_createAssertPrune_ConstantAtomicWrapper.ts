import typia from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_createAssertPrune_ConstantAtomicWrapper = _test_assertPrune(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    typia.createAssertPrune<ConstantAtomicWrapper>(),
    ConstantAtomicWrapper.SPOILERS,
);
