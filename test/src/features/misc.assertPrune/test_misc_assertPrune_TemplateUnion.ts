import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TemplateUnion } from "../../structures/TemplateUnion";

import { TypeGuardError } from "typia";

export const test_misc_assertPrune_TemplateUnion = (): void => _test_misc_assertPrune(TypeGuardError)(
    "TemplateUnion",
)<TemplateUnion>(
    TemplateUnion
)((input) => typia.misc.assertPrune<TemplateUnion>(input));
