import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_notation_createValidateKebab_ArrayHierarchicalPointer =
  (): void =>
    _test_notation_validateGeneral(
      "ArrayHierarchicalPointer",
    )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)<
      typia.KebabCase<ArrayHierarchicalPointer>
    >({
      convert: typia.notations.createValidateKebab<ArrayHierarchicalPointer>(),
      assert: typia.createAssert<typia.KebabCase<ArrayHierarchicalPointer>>(),
    });
