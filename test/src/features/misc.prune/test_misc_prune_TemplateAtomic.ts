import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_misc_prune_TemplateAtomic = (): void => _test_misc_prune(
    "TemplateAtomic",
)<TemplateAtomic>(
    TemplateAtomic
)((input) => typia.misc.prune<TemplateAtomic>(input));
