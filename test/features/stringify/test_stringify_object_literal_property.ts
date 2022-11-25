import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_object_literal_property = _test_stringify(
    "literal propertized object",
    ObjectLiteralProperty.generate,
    (input) => TSON.stringify(input),
);
