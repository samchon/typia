import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_notation_createValidateCamel_ArrayHierarchicalPointer =
  _test_notation_validateGeneral(
    "ArrayHierarchicalPointer",
  )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)<
    typia.CamelCase<ArrayHierarchicalPointer>
  >({
    convert: typia.notations.createValidateCamel<ArrayHierarchicalPointer>(),
    assert: typia.createAssert<typia.CamelCase<ArrayHierarchicalPointer>>(),
  });
