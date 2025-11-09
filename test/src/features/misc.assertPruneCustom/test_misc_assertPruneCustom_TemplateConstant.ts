import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TemplateConstant } from "../../structures/TemplateConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_TemplateConstant = (): void => _test_misc_assertPrune(CustomGuardError)(
    "TemplateConstant",
)<TemplateConstant>(
    TemplateConstant
)((input) => typia.misc.assertPrune<TemplateConstant>(input, (p) => new CustomGuardError(p)));
