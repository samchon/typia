import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_is_stringify } from "./_test_is_stringify";

export const test_is_stringify_object_nullable = _test_is_stringify(
    "nullable object",
    ObjectNullable.generate,
    (input) => TSON.isStringify(input),
    ObjectNullable.SPOILERS,
);
