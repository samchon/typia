import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_assertClone_ConstantAtomicWrapper = _test_assertClone(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    (input) => typia.assertClone<ConstantAtomicWrapper>(input),
    ConstantAtomicWrapper.SPOILERS,
);
