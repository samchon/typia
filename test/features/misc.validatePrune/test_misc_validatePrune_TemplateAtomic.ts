import typia from "../../../src";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_misc_validatePrune_TemplateAtomic = _test_misc_validatePrune(
    "TemplateAtomic",
)<TemplateAtomic>(
    TemplateAtomic
)((input) => typia.misc.validatePrune<TemplateAtomic>(input));
