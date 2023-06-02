import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_createAssertClone_ConstantAtomicWrapper = _test_assertClone(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    typia.createAssertClone<ConstantAtomicWrapper>(),
    ConstantAtomicWrapper.SPOILERS,
);
