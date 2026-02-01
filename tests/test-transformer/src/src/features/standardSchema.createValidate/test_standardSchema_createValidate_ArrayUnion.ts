import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_standardSchema_createValidate_ArrayUnion = (): void => _test_standardSchema_validate(
    "ArrayUnion",
)<ArrayUnion>(
    ArrayUnion
)(typia.createValidate<ArrayUnion>());
