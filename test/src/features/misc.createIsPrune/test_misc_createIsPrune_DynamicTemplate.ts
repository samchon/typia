import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_misc_createIsPrune_DynamicTemplate = (): void => _test_misc_isPrune(
    "DynamicTemplate",
)<DynamicTemplate>(
    DynamicTemplate
)(typia.misc.createIsPrune<DynamicTemplate>());
