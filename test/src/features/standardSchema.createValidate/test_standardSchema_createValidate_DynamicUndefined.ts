import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_standardSchema_createValidate_DynamicUndefined = _test_standardSchema_validate(
    "DynamicUndefined",
)<DynamicUndefined>(
    DynamicUndefined
)(typia.createValidate<DynamicUndefined>());
