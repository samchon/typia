import typia from "../../../src";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_misc_createAssertPrune_TemplateConstant = _test_misc_assertPrune(
    "TemplateConstant",
)<TemplateConstant>(
    TemplateConstant
)(typia.misc.createAssertPrune<TemplateConstant>());
