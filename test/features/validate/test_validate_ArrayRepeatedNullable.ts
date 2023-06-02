import typia from "../../../src";

import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";
import { _test_validate } from "../../internal/_test_validate";

export const test_validate_ArrayRepeatedNullable = _test_validate(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    (input) => typia.validate(input),
    ArrayRepeatedNullable.SPOILERS,
);
