import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_misc_validatePrune_ConstantAtomicWrapper =
    _test_misc_validatePrune("ConstantAtomicWrapper")<ConstantAtomicWrapper>(
        ConstantAtomicWrapper,
    )((input) => typia.misc.validatePrune<ConstantAtomicWrapper>(input));
