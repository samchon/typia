import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_misc_createValidatePrune_ObjectUndefined =
    _test_misc_validatePrune("ObjectUndefined")<ObjectUndefined>(
        ObjectUndefined,
    )(typia.misc.createValidatePrune<ObjectUndefined>());
