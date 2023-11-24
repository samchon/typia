import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_notation_validateSnake_TemplateConstant =
  _test_notation_validateGeneral("TemplateConstant")<TemplateConstant>(
    TemplateConstant,
  )<typia.SnakeCase<TemplateConstant>>({
    convert: (input) => typia.notations.validateSnake<TemplateConstant>(input),
    assert: typia.createAssert<typia.SnakeCase<TemplateConstant>>(),
  });
