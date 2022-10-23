import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_equals } from "./../equals/_test_equals";

export const test_create_equals_object_literal_property = _test_equals(
    "literal propertized object",
    ObjectLiteralProperty.generate,
    TSON.createEquals<ObjectLiteralProperty>(),
);
