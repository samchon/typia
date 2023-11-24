import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_notation_validateSnake_DynamicTag =
  _test_notation_validateGeneral("DynamicTag")<DynamicTag>(DynamicTag)<
    typia.SnakeCase<DynamicTag>
  >({
    convert: (input) => typia.notations.validateSnake<DynamicTag>(input),
    assert: typia.createAssert<typia.SnakeCase<DynamicTag>>(),
  });
