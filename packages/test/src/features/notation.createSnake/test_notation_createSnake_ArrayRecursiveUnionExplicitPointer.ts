import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_notation_createValidateSnake_ArrayRecursiveUnionExplicitPointer =
  _test_notation_validateGeneral(
    "ArrayRecursiveUnionExplicitPointer",
  )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)<
    typia.SnakeCase<ArrayRecursiveUnionExplicitPointer>
  >({
    convert:
      typia.notations.createValidateSnake<ArrayRecursiveUnionExplicitPointer>(),
    assert:
      typia.createAssert<typia.SnakeCase<ArrayRecursiveUnionExplicitPointer>>(),
  });
