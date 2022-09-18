import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_assert_equals } from "./_test_assert_equals";

export const test_assert_equals_object_nullable = _test_assert_equals(
    "nullable object",
    ObjectNullable.generate,
    (input) => TSON.assertEquals(input),
);
