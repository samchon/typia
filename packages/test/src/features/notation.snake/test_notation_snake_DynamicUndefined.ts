import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_notation_validateSnake_DynamicUndefined =
  _test_notation_validateGeneral("DynamicUndefined")<DynamicUndefined>(
    DynamicUndefined,
  )<typia.SnakeCase<DynamicUndefined>>({
    convert: (input) => typia.notations.validateSnake<DynamicUndefined>(input),
    assert: typia.createAssert<typia.SnakeCase<DynamicUndefined>>(),
  });
