import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_standardSchema_createValidate_DynamicUnion = (): void => _test_standardSchema_validate(
    "DynamicUnion",
)<DynamicUnion>(
    DynamicUnion
)(typia.createValidate<DynamicUnion>());
