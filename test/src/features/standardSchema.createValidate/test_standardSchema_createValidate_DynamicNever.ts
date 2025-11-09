import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_standardSchema_createValidate_DynamicNever = (): void => _test_standardSchema_validate(
    "DynamicNever",
)<DynamicNever>(
    DynamicNever
)(typia.createValidate<DynamicNever>());
