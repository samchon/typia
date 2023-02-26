import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_createIsParse_ConstantAtomicWrapper = _test_isParse(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    typia.createIsParse<ConstantAtomicWrapper>(),
    ConstantAtomicWrapper.SPOILERS,
);
