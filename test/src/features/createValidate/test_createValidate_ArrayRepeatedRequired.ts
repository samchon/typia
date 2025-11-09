import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_createValidate_ArrayRepeatedRequired = (): void => _test_validate(
    "ArrayRepeatedRequired",
)<ArrayRepeatedRequired>(
    ArrayRepeatedRequired
)(typia.createValidate<ArrayRepeatedRequired>());
