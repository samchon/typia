import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_assert_clone } from "./../assert_clone/_test_assert_clone";

export const test_create_assert_clone_object_nullable = _test_assert_clone(
    "nullable object",
    ObjectNullable.generate,
    TSON.createAssertClone<ObjectNullable>(),
    ObjectNullable.SPOILERS,
);
