import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_notation_createValidateSnake_ArrayHierarchicalPointer =
  _test_notation_validateGeneral(
    "ArrayHierarchicalPointer",
  )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)<
    typia.SnakeCase<ArrayHierarchicalPointer>
  >({
    convert: typia.notations.createValidateSnake<ArrayHierarchicalPointer>(),
    assert: typia.createAssert<typia.SnakeCase<ArrayHierarchicalPointer>>(),
  });
