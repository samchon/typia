import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TemplateConstant } from "../../structures/TemplateConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_TemplateConstant = _test_assertGuard(CustomGuardError)(
    "TemplateConstant",
)<TemplateConstant>(
    TemplateConstant
)(typia.createAssertGuard<TemplateConstant>((p) => new CustomGuardError(p)));
