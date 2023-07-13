import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_misc_assertPrune_ConstantAtomicWrapper =
    _test_misc_assertPrune(
        "ConstantAtomicWrapper",
        ConstantAtomicWrapper.generate,
        (input) => typia.misc.assertPrune(input),
        ConstantAtomicWrapper.SPOILERS,
    );
