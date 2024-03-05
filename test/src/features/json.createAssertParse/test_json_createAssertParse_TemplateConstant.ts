import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_json_createAssertParse_TemplateConstant =
  _test_json_assertParse(TypeGuardError)("TemplateConstant")<TemplateConstant>(
    TemplateConstant,
  )(typia.json.createAssertParse<TemplateConstant>());
