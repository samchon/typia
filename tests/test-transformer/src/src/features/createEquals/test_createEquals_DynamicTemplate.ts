import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_createEquals_DynamicTemplate = (): void => _test_equals(
    "DynamicTemplate",
)<DynamicTemplate>(
    DynamicTemplate
)(typia.createEquals<DynamicTemplate>());
