import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_object_literal_property = _test_is_stringify(
    "literal propertized object",
    ObjectLiteralProperty.generate,
    (input) => TSON.isStringify(input),
    ObjectLiteralProperty.SPOILERS,
);
