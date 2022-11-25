import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ObjectLiteralProperty = _test_validate(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    TSON.createValidate<ObjectLiteralProperty>(),
    ObjectLiteralProperty.SPOILERS,
);
