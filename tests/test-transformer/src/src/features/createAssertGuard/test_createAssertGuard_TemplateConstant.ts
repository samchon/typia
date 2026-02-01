import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TemplateConstant } from "../../structures/TemplateConstant";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_TemplateConstant = (): void => _test_assertGuard(TypeGuardError)(
    "TemplateConstant",
)<TemplateConstant>(
    TemplateConstant
)(typia.createAssertGuard<TemplateConstant>());
