import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_notation_createValidateSnake_TemplateAtomic = (): void =>
  _test_notation_validateGeneral("TemplateAtomic")<TemplateAtomic>(
    TemplateAtomic,
  )<typia.SnakeCase<TemplateAtomic>>({
    convert: typia.notations.createValidateSnake<TemplateAtomic>(),
    assert: typia.createAssert<typia.SnakeCase<TemplateAtomic>>(),
  });
