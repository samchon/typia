import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_validateParse_ObjectLiteralType = _test_validateParse(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input) => typia.validateParse<ObjectLiteralType>(input),
    ObjectLiteralType.SPOILERS,
);
