import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_misc_createClone_DynamicTemplate = (): void => _test_misc_clone(
    "DynamicTemplate",
)<DynamicTemplate>(
    DynamicTemplate
)(typia.misc.createClone<DynamicTemplate>());
