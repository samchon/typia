import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_notation_validateSnake_DynamicNever =
  _test_notation_validateGeneral("DynamicNever")<DynamicNever>(DynamicNever)<
    typia.SnakeCase<DynamicNever>
  >({
    convert: (input) => typia.notations.validateSnake<DynamicNever>(input),
    assert: typia.createAssert<typia.SnakeCase<DynamicNever>>(),
  });
