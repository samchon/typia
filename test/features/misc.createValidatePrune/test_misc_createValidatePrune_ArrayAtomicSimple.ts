import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_misc_createValidatePrune_ArrayAtomicSimple =
    _test_misc_validatePrune("ArrayAtomicSimple")<ArrayAtomicSimple>(
        ArrayAtomicSimple,
    )(typia.misc.createValidatePrune<ArrayAtomicSimple>());
