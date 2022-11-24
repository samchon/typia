import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_create_assert_type_object_nullable = _test_assert_type(
    "nullable object",
    ObjectNullable.generate,
    TSON.createAssertType<ObjectNullable>(),
    ObjectNullable.SPOILERS,
);
