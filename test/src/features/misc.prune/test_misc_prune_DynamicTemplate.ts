import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_misc_prune_DynamicTemplate = (): void => _test_misc_prune(
    "DynamicTemplate",
)<DynamicTemplate>(
    DynamicTemplate
)((input) => typia.misc.prune<DynamicTemplate>(input));
