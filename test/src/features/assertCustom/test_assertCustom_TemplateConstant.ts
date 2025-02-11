import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TemplateConstant } from "../../structures/TemplateConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_TemplateConstant = _test_assert(CustomGuardError)(
    "TemplateConstant",
)<TemplateConstant>(
    TemplateConstant
)((input) => typia.assert<TemplateConstant>(input, (p) => new CustomGuardError(p)));
