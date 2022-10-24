import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_object_nullable = _test_assert_stringify(
    "nullable object",
    ObjectNullable.generate,
    (input) => TSON.assertStringify(input),
    ObjectNullable.SPOILERS,
);
