import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_isPrune_ConstantAtomicWrapper = _test_isPrune(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    (input) => typia.isPrune<ConstantAtomicWrapper>(input),
    ConstantAtomicWrapper.SPOILERS,
);
