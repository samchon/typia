import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_misc_validatePrune_ObjectLiteralProperty =
    _test_misc_validatePrune("ObjectLiteralProperty")<ObjectLiteralProperty>(
        ObjectLiteralProperty,
    )((input) => typia.misc.validatePrune<ObjectLiteralProperty>(input));
