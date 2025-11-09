import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TemplateConstant } from "../../structures/TemplateConstant";

import { TypeGuardError } from "typia";

export const test_assert_TemplateConstant = (): void => _test_assert(TypeGuardError)(
    "TemplateConstant",
)<TemplateConstant>(
    TemplateConstant
)((input) => typia.assert<TemplateConstant>(input));
