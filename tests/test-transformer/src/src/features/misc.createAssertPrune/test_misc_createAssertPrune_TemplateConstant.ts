import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TemplateConstant } from "../../structures/TemplateConstant";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_TemplateConstant = (): void => _test_misc_assertPrune(TypeGuardError)(
    "TemplateConstant",
)<TemplateConstant>(
    TemplateConstant
)(typia.misc.createAssertPrune<TemplateConstant>());
