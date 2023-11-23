import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_json_createValidateStringify_TemplateConstant =
  _test_json_validateStringify("TemplateConstant")<TemplateConstant>(
    TemplateConstant,
  )(typia.json.createValidateStringify<TemplateConstant>());
