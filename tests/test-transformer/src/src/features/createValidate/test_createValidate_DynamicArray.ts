import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_createValidate_DynamicArray = (): void => _test_validate(
    "DynamicArray",
)<DynamicArray>(
    DynamicArray
)(typia.createValidate<DynamicArray>());
