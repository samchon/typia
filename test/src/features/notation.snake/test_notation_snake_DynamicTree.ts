import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_notation_validateSnake_DynamicTree =
  _test_notation_validateGeneral("DynamicTree")<DynamicTree>(DynamicTree)<
    typia.SnakeCase<DynamicTree>
  >({
    convert: (input) => typia.notations.validateSnake<DynamicTree>(input),
    assert: typia.createAssert<typia.SnakeCase<DynamicTree>>(),
  });
