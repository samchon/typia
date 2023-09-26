import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_misc_createValidatePrune_ArraySimple =
    _test_misc_validatePrune("ArraySimple")<ArraySimple>(ArraySimple)(
        typia.misc.createValidatePrune<ArraySimple>(),
    );
