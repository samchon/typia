import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_notation_validatePascal_TemplateConstant = (): void =>
  _test_notation_validateGeneral("TemplateConstant")<TemplateConstant>(
    TemplateConstant,
  )<typia.PascalCase<TemplateConstant>>({
    convert: (input) => typia.notations.validatePascal<TemplateConstant>(input),
    assert: typia.createAssert<typia.PascalCase<TemplateConstant>>(),
  });
