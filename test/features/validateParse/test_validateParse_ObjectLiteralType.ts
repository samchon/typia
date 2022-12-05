import TSON from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_ObjectLiteralType = _test_validateParse(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input) => TSON.validateParse<ObjectLiteralType>(input),
    ObjectLiteralType.SPOILERS,
);
