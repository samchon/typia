import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_notation_validateCamel_TemplateAtomic =
  _test_notation_validateGeneral("TemplateAtomic")<TemplateAtomic>(
    TemplateAtomic,
  )<typia.CamelCase<TemplateAtomic>>({
    convert: (input) => typia.notations.validateCamel<TemplateAtomic>(input),
    assert: typia.createAssert<typia.CamelCase<TemplateAtomic>>(),
  });
