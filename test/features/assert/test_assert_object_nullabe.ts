import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_assert } from "../assert/_test_assert";

export const test_assert_object_nullable = _test_assert(
    "nullable object",
    ObjectNullable.generate,
    (input) => TSON.assertType(input),
);
