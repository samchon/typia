import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_assert_equals } from "./../assert_equals/_test_assert_equals";

export const test_create_assert_equals_object_nullable = _test_assert_equals(
    "nullable object",
    ObjectNullable.generate,
    TSON.createAssertEquals<ObjectNullable>(),
);
