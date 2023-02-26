import typia from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ObjectLiteralType = _test_validateParse(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    typia.createValidateParse<ObjectLiteralType>(),
    ObjectLiteralType.SPOILERS,
);
