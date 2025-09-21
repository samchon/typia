import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_notation_validateKebab_TemplateAtomic = (): void =>
  _test_notation_validateGeneral("TemplateAtomic")<TemplateAtomic>(
    TemplateAtomic,
  )<typia.KebabCase<TemplateAtomic>>({
    convert: (input) => typia.notations.validateKebab<TemplateAtomic>(input),
    assert: typia.createAssert<typia.KebabCase<TemplateAtomic>>(),
  });
