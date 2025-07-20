import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_json_assertParse_TemplateConstant = (): void =>
  _test_json_assertParse(TypeGuardError)("TemplateConstant")<TemplateConstant>(
    TemplateConstant,
  )((input) => typia.json.assertParse<TemplateConstant>(input));
