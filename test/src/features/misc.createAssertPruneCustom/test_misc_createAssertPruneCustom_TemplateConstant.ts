import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TemplateConstant } from "../../structures/TemplateConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_TemplateConstant = (): void => _test_misc_assertPrune(CustomGuardError)(
    "TemplateConstant",
)<TemplateConstant>(
    TemplateConstant
)(typia.misc.createAssertPrune<TemplateConstant>((p) => new CustomGuardError(p)));
