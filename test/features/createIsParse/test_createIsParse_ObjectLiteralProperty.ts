import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ObjectLiteralProperty = _test_isParse(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    TSON.createIsParse<ObjectLiteralProperty>(),
    ObjectLiteralProperty.SPOILERS,
);
