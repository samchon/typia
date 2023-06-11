import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_createValidatePrune_ObjectLiteralType = _test_validatePrune(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    typia.createValidatePrune<ObjectLiteralType>(),
    ObjectLiteralType.SPOILERS,
);
