import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_is } from "./../is/_test_is";

export const test_create_is_object_literal_property = _test_is(
    "literal propertized object",
    ObjectLiteralProperty.generate,
    TSON.createIs<ObjectLiteralProperty>(),
    ObjectLiteralProperty.SPOILERS,
);
