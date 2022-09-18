import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_validate_equals } from "./_test_validate_equals";

export const test_validate_equals_object_literal_property =
    _test_validate_equals(
        "literal propertized object",
        ObjectLiteralProperty.generate,
        (input) => TSON.validateEquals(input),
    );
