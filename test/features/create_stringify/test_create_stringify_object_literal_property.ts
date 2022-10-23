import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_object_literal_property = _test_stringify(
    "literal propertized object",
    ObjectLiteralProperty.generate(),
    TSON.createStringify<ObjectLiteralProperty>(),
);
