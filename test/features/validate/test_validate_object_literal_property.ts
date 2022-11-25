import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_object_literal_property = _test_validate(
    "literal propertized object",
    ObjectLiteralProperty.generate,
    (input) => TSON.validate(input),
    ObjectLiteralProperty.SPOILERS,
);
