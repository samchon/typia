import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_notation_validatePascal_ArrayHierarchicalPointer =
  _test_notation_validateGeneral(
    "ArrayHierarchicalPointer",
  )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)<
    typia.PascalCase<ArrayHierarchicalPointer>
  >({
    convert: (input) =>
      typia.notations.validatePascal<ArrayHierarchicalPointer>(input),
    assert: typia.createAssert<typia.PascalCase<ArrayHierarchicalPointer>>(),
  });
