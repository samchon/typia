import typia from "typia";

import { DynamicArray } from "../../structures/DynamicArray";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_DynamicArray = _test_validate(
    "DynamicArray",
    DynamicArray.generate,
    (input) => typia.validate(input),
    DynamicArray.SPOILERS,
);
