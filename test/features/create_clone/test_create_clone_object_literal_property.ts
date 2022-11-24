import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_object_literal_property = _test_clone(
    "literal propertized object",
    ObjectLiteralProperty.generate,
    TSON.createClone<ObjectLiteralProperty>(),
);
