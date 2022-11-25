import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_object_literal_property = _test_equals(
    "literal propertized object",
    ObjectLiteralProperty.generate,
    (input) => TSON.equals(input),
);
