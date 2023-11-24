import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_misc_createValidateClone_TemplateConstant =
  _test_misc_validateClone("TemplateConstant")<TemplateConstant>(
    TemplateConstant,
  )(typia.misc.createValidateClone<TemplateConstant>());
