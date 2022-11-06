import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_object_literal_property = _test_is_clone(
    "literal propertized object",
    ObjectLiteralProperty.generate,
    (input) => TSON.isClone(input),
    ObjectLiteralProperty.SPOILERS,
);
