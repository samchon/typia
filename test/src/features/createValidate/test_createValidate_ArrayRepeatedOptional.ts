import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_createValidate_ArrayRepeatedOptional = (): void => _test_validate(
    "ArrayRepeatedOptional",
)<ArrayRepeatedOptional>(
    ArrayRepeatedOptional
)(typia.createValidate<ArrayRepeatedOptional>());
