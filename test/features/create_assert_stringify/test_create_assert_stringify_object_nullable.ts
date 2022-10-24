import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_object_nullable =
    _test_assert_stringify(
        "nullable object",
        ObjectNullable.generate,
        TSON.createAssertStringify<ObjectNullable>(),
        ObjectNullable.SPOILERS,
    );
