import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_TemplateAtomic = (): void => _test_misc_assertPrune(CustomGuardError)(
    "TemplateAtomic",
)<TemplateAtomic>(
    TemplateAtomic
)(typia.misc.createAssertPrune<TemplateAtomic>((p) => new CustomGuardError(p)));
