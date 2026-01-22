import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_notation_validateSnake_ArrayHierarchicalPointer = (): void =>
  _test_notation_validateGeneral(
    "ArrayHierarchicalPointer",
  )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)<
    typia.SnakeCase<ArrayHierarchicalPointer>
  >({
    convert: (input) =>
      typia.notations.validateSnake<ArrayHierarchicalPointer>(input),
    assert: typia.createAssert<typia.SnakeCase<ArrayHierarchicalPointer>>(),
  });
