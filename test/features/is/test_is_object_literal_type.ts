import TSON from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_is } from "../internal/_test_is";

export const test_is_object_literal_type = _test_is(
    "literal propertized object",
    () => ObjectLiteralType,
    (input) => TSON.is(input),
    // MUST NOT SPOIL
);
