import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_notation_validateSnake_DynamicArray =
  _test_notation_validateGeneral("DynamicArray")<DynamicArray>(DynamicArray)<
    typia.SnakeCase<DynamicArray>
  >({
    convert: (input) => typia.notations.validateSnake<DynamicArray>(input),
    assert: typia.createAssert<typia.SnakeCase<DynamicArray>>(),
  });
