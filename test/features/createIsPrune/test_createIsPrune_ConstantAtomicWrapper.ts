import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_createIsPrune_ConstantAtomicWrapper = _test_isPrune(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    typia.createIsPrune<ConstantAtomicWrapper>(),
    ConstantAtomicWrapper.SPOILERS,
);
