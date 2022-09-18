import TSON from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_equals } from "./_test_equals";

export const test_equals_object_literal_type = _test_equals(
    "literal propertized object",
    () =>
        JSON.parse(
            JSON.stringify(ObjectLiteralType),
        ) as typeof ObjectLiteralType,
    (input) => TSON.equals(input),
);
