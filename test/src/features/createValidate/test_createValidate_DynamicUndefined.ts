import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_createValidate_DynamicUndefined = (): void => _test_validate(
    "DynamicUndefined",
)<DynamicUndefined>(
    DynamicUndefined
)(typia.createValidate<DynamicUndefined>());
