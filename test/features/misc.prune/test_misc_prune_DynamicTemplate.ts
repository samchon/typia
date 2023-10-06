import typia from "../../../src";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_misc_prune_DynamicTemplate = _test_misc_prune(
    "DynamicTemplate",
)<DynamicTemplate>(
    DynamicTemplate
)((input) => typia.misc.prune<DynamicTemplate>(input));
