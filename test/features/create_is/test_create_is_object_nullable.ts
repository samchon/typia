import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_is } from "./../is/_test_is";

export const test_create_is_object_nullable = _test_is(
    "nullable object",
    ObjectNullable.generate,
    TSON.createIs<ObjectNullable>(),
    ObjectNullable.SPOILERS,
);
