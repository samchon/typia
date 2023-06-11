import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_createValidateParse_ObjectLiteralType = _test_validateParse(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    typia.createValidateParse<ObjectLiteralType>(),
    ObjectLiteralType.SPOILERS,
);
