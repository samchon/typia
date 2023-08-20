import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_validate_ArraySimple = _test_validate(
    "ArraySimple",
    ArraySimple.generate,
    (input) => typia.validate<ArraySimple>(input),
    ArraySimple.SPOILERS,
);
