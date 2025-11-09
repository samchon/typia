import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_misc_createPrune_TemplateConstant = (): void => _test_misc_prune(
    "TemplateConstant",
)<TemplateConstant>(
    TemplateConstant
)(typia.misc.createPrune<TemplateConstant>());
