import TSON from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_object_literal_type = _test_stringify(
    "object literal",
    ObjectLiteralType,
    (input) => TSON.stringify(input),
);
