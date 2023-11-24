import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_json_createValidateParse_TemplateConstant =
  _test_json_validateParse("TemplateConstant")<TemplateConstant>(
    TemplateConstant,
  )(typia.json.createValidateParse<TemplateConstant>());
