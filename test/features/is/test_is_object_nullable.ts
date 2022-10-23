import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_is } from "./_test_is";

export const test_is_object_nullable = _test_is(
    "nullable object",
    ObjectNullable.generate,
    (input) => TSON.is(input),
    ObjectNullable.SPOILERS,
);
