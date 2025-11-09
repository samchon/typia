import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_standardSchema_createValidate_DynamicConstant = (): void => _test_standardSchema_validate(
    "DynamicConstant",
)<DynamicConstant>(
    DynamicConstant
)(typia.createValidate<DynamicConstant>());
