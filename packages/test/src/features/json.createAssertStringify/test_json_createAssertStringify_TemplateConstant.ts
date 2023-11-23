import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_json_createAssertStringify_TemplateConstant =
  _test_json_assertStringify("TemplateConstant")<TemplateConstant>(
    TemplateConstant,
  )(typia.json.createAssertStringify<TemplateConstant>());
