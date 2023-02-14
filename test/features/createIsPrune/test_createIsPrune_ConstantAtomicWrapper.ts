import typia from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_ConstantAtomicWrapper = _test_isPrune(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    typia.createIsPrune<ConstantAtomicWrapper>(),
    ConstantAtomicWrapper.SPOILERS,
);