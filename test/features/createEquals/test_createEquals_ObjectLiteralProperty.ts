import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_ObjectLiteralProperty = _test_equals(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    TSON.createEquals<ObjectLiteralProperty>(),
);