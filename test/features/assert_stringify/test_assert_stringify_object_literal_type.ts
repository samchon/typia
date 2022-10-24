import TSON from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_object_literal_type = _test_assert_stringify(
    "object literal",
    () => ObjectLiteralType,
    (input) => TSON.assertStringify(input),
);
