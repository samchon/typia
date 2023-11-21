import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_notation_validatePascal_ArrayHierarchical =
  _test_notation_validateGeneral("ArrayHierarchical")<ArrayHierarchical>(
    ArrayHierarchical,
  )<typia.PascalCase<ArrayHierarchical>>({
    convert: (input) =>
      typia.notations.validatePascal<ArrayHierarchical>(input),
    assert: typia.createAssert<typia.PascalCase<ArrayHierarchical>>(),
  });
