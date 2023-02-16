import typia from "typia";

import { DynamicArray } from "../../structures/DynamicArray";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_DynamicArray = _test_validate(
    "DynamicArray",
    DynamicArray.generate,
    typia.createValidate<DynamicArray>(),
    DynamicArray.SPOILERS,
);
