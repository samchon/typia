import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_misc_validatePrune_ObjectLiteralType =
    _test_misc_validatePrune<ObjectLiteralType>(ObjectLiteralType)(
        typia.misc.createValidatePrune<ObjectLiteralType>(),
    );
