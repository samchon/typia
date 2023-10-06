import typia from "../../../src";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_misc_validateClone_TemplateConstant = _test_misc_validateClone(
    "TemplateConstant",
)<TemplateConstant>(
    TemplateConstant
)((input) => typia.misc.validateClone<TemplateConstant>(input));
