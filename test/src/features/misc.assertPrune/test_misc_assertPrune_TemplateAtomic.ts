import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

import { TypeGuardError } from "typia";

export const test_misc_assertPrune_TemplateAtomic = (): void => _test_misc_assertPrune(TypeGuardError)(
    "TemplateAtomic",
)<TemplateAtomic>(
    TemplateAtomic
)((input) => typia.misc.assertPrune<TemplateAtomic>(input));
