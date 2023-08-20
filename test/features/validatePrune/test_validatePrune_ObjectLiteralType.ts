import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_validatePrune_ObjectLiteralType = _test_validatePrune(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input) => typia.validatePrune<ObjectLiteralType>(input),
    ObjectLiteralType.SPOILERS,
);
