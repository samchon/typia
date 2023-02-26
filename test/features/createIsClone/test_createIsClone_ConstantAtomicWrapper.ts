import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_createIsClone_ConstantAtomicWrapper = _test_isClone(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    typia.createIsClone<ConstantAtomicWrapper>(),
    ConstantAtomicWrapper.SPOILERS,
);
