import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ObjectLiteralProperty = _test_isClone(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    TSON.createIsClone<ObjectLiteralProperty>(),
    ObjectLiteralProperty.SPOILERS,
);