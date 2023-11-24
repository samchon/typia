import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_notation_validateCamel_ArrayHierarchicalPointer =
  _test_notation_validateGeneral(
    "ArrayHierarchicalPointer",
  )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)<
    typia.CamelCase<ArrayHierarchicalPointer>
  >({
    convert: (input) =>
      typia.notations.validateCamel<ArrayHierarchicalPointer>(input),
    assert: typia.createAssert<typia.CamelCase<ArrayHierarchicalPointer>>(),
  });
