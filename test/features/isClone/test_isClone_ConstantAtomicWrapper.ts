import typia from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ConstantAtomicWrapper = _test_isClone(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    (input) => typia.isClone(input),
    ConstantAtomicWrapper.SPOILERS,
);