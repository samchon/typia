import typia from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ArraySimple = _test_validate(
    "ArraySimple",
    ArraySimple.generate,
    (input) => typia.validate(input),
    ArraySimple.SPOILERS,
);
