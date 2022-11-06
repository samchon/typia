import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_object_nullable = _test_assert_clone(
    "nullable object",
    ObjectNullable.generate,
    (input) => TSON.assertClone(input),
    ObjectNullable.SPOILERS,
);
