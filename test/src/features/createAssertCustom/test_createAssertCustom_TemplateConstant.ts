import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TemplateConstant } from "../../structures/TemplateConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_TemplateConstant = _test_assert(CustomGuardError)(
    "TemplateConstant",
)<TemplateConstant>(
    TemplateConstant
)(typia.createAssert<TemplateConstant>((p) => new CustomGuardError(p)));
