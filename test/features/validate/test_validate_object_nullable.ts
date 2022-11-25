import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_object_nullable = _test_validate(
    "nullable object",
    ObjectNullable.generate,
    (input) => TSON.validate(input),
    ObjectNullable.SPOILERS,
);
