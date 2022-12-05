import TSON from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ObjectLiteralType = _test_validateClone(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input) => TSON.validateClone(input),
    ObjectLiteralType.SPOILERS,
);
