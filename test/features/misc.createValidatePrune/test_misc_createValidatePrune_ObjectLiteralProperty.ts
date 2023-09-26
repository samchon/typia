import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_misc_createValidatePrune_ObjectLiteralProperty =
    _test_misc_validatePrune("ObjectLiteralProperty")<ObjectLiteralProperty>(
        ObjectLiteralProperty,
    )(typia.misc.createValidatePrune<ObjectLiteralProperty>());
