import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_assert_type } from "./_test_assert_type";

export const test_assert_type_object_nullable = _test_assert_type(
    "nullable object",
    ObjectNullable.generate,
    (input) => TSON.assertType(input),
    ObjectNullable.SPOILERS,
);
