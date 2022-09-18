import TSON from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_validate_equals } from "./_test_validate_equals";

export const test_validate_equals_object_literal_type = _test_validate_equals(
    "literal propertized object",
    () =>
        JSON.parse(
            JSON.stringify(ObjectLiteralType),
        ) as typeof ObjectLiteralType,
    (input) => TSON.validateEquals(input),
);
