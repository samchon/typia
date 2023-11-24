import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_notation_validateSnake_DynamicJsonValue =
  _test_notation_validateGeneral("DynamicJsonValue")<DynamicJsonValue>(
    DynamicJsonValue,
  )<typia.SnakeCase<DynamicJsonValue>>({
    convert: (input) => typia.notations.validateSnake<DynamicJsonValue>(input),
    assert: typia.createAssert<typia.SnakeCase<DynamicJsonValue>>(),
  });
