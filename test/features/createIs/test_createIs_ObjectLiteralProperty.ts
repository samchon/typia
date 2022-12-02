import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ObjectLiteralProperty = _test_is(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    TSON.createIs<ObjectLiteralProperty>(),
    ObjectLiteralProperty.SPOILERS,
);
