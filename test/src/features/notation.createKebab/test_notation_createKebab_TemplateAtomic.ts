import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_notation_createValidateKebab_TemplateAtomic = (): void =>
  _test_notation_validateGeneral("TemplateAtomic")<TemplateAtomic>(
    TemplateAtomic,
  )<typia.KebabCase<TemplateAtomic>>({
    convert: typia.notations.createValidateKebab<TemplateAtomic>(),
    assert: typia.createAssert<typia.KebabCase<TemplateAtomic>>(),
  });
