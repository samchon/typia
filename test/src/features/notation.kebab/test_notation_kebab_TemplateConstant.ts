import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_notation_validateKebab_TemplateConstant = (): void =>
  _test_notation_validateGeneral("TemplateConstant")<TemplateConstant>(
    TemplateConstant,
  )<typia.KebabCase<TemplateConstant>>({
    convert: (input) => typia.notations.validateKebab<TemplateConstant>(input),
    assert: typia.createAssert<typia.KebabCase<TemplateConstant>>(),
  });
