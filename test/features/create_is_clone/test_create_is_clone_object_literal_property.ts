import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_is_clone } from "./../is_clone/_test_is_clone";

export const test_create_is_clone_object_literal_property = _test_is_clone(
    "literal propertized object",
    ObjectLiteralProperty.generate,
    TSON.createIsClone<ObjectLiteralProperty>(),
    ObjectLiteralProperty.SPOILERS,
);
