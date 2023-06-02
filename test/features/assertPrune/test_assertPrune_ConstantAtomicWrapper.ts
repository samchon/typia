import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_assertPrune_ConstantAtomicWrapper = _test_assertPrune(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    (input) => typia.assertPrune(input),
    ConstantAtomicWrapper.SPOILERS,
);
