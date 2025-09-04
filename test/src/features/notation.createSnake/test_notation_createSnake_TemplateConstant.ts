import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_notation_createValidateSnake_TemplateConstant = (): void =>
  _test_notation_validateGeneral("TemplateConstant")<TemplateConstant>(
    TemplateConstant,
  )<typia.SnakeCase<TemplateConstant>>({
    convert: typia.notations.createValidateSnake<TemplateConstant>(),
    assert: typia.createAssert<typia.SnakeCase<TemplateConstant>>(),
  });
