import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_misc_createValidatePrune_ConstantAtomicSimple =
    _test_misc_validatePrune("ConstantAtomicSimple")<ConstantAtomicSimple>(
        ConstantAtomicSimple,
    )(typia.misc.createValidatePrune<ConstantAtomicSimple>());
