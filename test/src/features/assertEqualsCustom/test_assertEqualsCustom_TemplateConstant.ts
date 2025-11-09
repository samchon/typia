import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TemplateConstant } from "../../structures/TemplateConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_TemplateConstant = (): void => _test_assertEquals(CustomGuardError)(
    "TemplateConstant",
)<TemplateConstant>(
    TemplateConstant
)((input) => typia.assertEquals<TemplateConstant>(input, (p) => new CustomGuardError(p)));
