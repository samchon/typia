import TSON from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ObjectLiteralType = _test_isStringify(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    TSON.createIsStringify<ObjectLiteralType>(),
    ObjectLiteralType.SPOILERS,
);