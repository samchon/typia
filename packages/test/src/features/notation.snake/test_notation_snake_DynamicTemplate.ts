import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_notation_validateSnake_DynamicTemplate =
  _test_notation_validateGeneral("DynamicTemplate")<DynamicTemplate>(
    DynamicTemplate,
  )<typia.SnakeCase<DynamicTemplate>>({
    convert: (input) => typia.notations.validateSnake<DynamicTemplate>(input),
    assert: typia.createAssert<typia.SnakeCase<DynamicTemplate>>(),
  });
