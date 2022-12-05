import TSON from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ObjectLiteralType = _test_validateParse(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    TSON.createValidateParse<ObjectLiteralType>(),
    ObjectLiteralType.SPOILERS,
);
