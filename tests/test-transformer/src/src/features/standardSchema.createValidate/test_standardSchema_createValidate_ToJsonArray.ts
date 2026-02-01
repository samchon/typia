import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_standardSchema_createValidate_ToJsonArray = (): void => _test_standardSchema_validate(
    "ToJsonArray",
)<ToJsonArray>(
    ToJsonArray
)(typia.createValidate<ToJsonArray>());
