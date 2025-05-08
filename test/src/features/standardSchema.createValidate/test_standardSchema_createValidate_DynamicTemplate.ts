import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_standardSchema_createValidate_DynamicTemplate = _test_standardSchema_validate(
    "DynamicTemplate",
)<DynamicTemplate>(
    DynamicTemplate
)(typia.createValidate<DynamicTemplate>());
