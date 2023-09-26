import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_misc_createValidatePrune_ObjectRecursive =
    _test_misc_validatePrune("ObjectRecursive")<ObjectRecursive>(
        ObjectRecursive,
    )(typia.misc.createValidatePrune<ObjectRecursive>());
