import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_misc_createIsClone_TemplateConstant = (): void => _test_misc_isClone(
    "TemplateConstant",
)<TemplateConstant>(
    TemplateConstant
)(typia.misc.createIsClone<TemplateConstant>());
