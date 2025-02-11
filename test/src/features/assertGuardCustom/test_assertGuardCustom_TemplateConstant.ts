import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TemplateConstant } from "../../structures/TemplateConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_TemplateConstant = _test_assertGuard(CustomGuardError)(
    "TemplateConstant",
)<TemplateConstant>(
    TemplateConstant
)((input) => typia.assertGuard<TemplateConstant>(input, (p) => new CustomGuardError(p)));
