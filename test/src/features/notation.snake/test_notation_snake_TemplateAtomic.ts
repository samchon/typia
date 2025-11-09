import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_notation_validateSnake_TemplateAtomic = (): void =>
  _test_notation_validateGeneral("TemplateAtomic")<TemplateAtomic>(
    TemplateAtomic,
  )<typia.SnakeCase<TemplateAtomic>>({
    convert: (input) => typia.notations.validateSnake<TemplateAtomic>(input),
    assert: typia.createAssert<typia.SnakeCase<TemplateAtomic>>(),
  });
