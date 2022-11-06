import TSON from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_object_literal_type = _test_assert_clone(
    "object literal",
    () => ObjectLiteralType,
    (input) => TSON.assertClone(input),
);
