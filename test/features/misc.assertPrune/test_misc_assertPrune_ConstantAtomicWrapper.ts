import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_misc_assertPrune_ConstantAtomicWrapper =
    _test_misc_assertPrune("ConstantAtomicWrapper")<ConstantAtomicWrapper>(
        ConstantAtomicWrapper,
    )((input) => typia.misc.assertPrune<ConstantAtomicWrapper>(input));
