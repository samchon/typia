import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ObjectLiteralProperty = _test_isStringify(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    TSON.createIsStringify<ObjectLiteralProperty>(),
    ObjectLiteralProperty.SPOILERS,
);