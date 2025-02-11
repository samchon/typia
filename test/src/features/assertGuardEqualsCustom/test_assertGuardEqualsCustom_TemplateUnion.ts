import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TemplateUnion } from "../../structures/TemplateUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_TemplateUnion = _test_assertGuardEquals(CustomGuardError)(
    "TemplateUnion",
)<TemplateUnion>(
    TemplateUnion
)((input) => typia.assertGuardEquals<TemplateUnion>(input, (p) => new CustomGuardError(p)));
