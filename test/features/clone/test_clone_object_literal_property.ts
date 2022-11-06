import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_clone } from "./_test_clone";

export const test_clone_object_literal_property = _test_clone(
    "literal propertized object",
    ObjectLiteralProperty.generate,
    (input) => TSON.clone(input),
);
