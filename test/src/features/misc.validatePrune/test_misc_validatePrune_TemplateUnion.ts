import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_misc_validatePrune_TemplateUnion = (): void => _test_misc_validatePrune(
    "TemplateUnion",
)<TemplateUnion>(
    TemplateUnion
)((input) => typia.misc.validatePrune<TemplateUnion>(input));
