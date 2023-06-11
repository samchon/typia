import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_validate_ArrayUnion = _test_validate(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) => typia.validate(input),
    ArrayUnion.SPOILERS,
);
