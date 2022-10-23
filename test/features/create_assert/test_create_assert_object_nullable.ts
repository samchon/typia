import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_object_nullable = _test_assert(
    "nullable object",
    ObjectNullable.generate,
    TSON.createAssertType<ObjectNullable>(),
    ObjectNullable.SPOILERS,
);
