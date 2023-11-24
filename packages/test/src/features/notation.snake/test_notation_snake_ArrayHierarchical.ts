import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_notation_validateSnake_ArrayHierarchical =
  _test_notation_validateGeneral("ArrayHierarchical")<ArrayHierarchical>(
    ArrayHierarchical,
  )<typia.SnakeCase<ArrayHierarchical>>({
    convert: (input) => typia.notations.validateSnake<ArrayHierarchical>(input),
    assert: typia.createAssert<typia.SnakeCase<ArrayHierarchical>>(),
  });
