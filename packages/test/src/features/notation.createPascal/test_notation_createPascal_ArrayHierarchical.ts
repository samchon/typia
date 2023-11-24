import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_notation_createValidatePascal_ArrayHierarchical =
  _test_notation_validateGeneral("ArrayHierarchical")<ArrayHierarchical>(
    ArrayHierarchical,
  )<typia.PascalCase<ArrayHierarchical>>({
    convert: typia.notations.createValidatePascal<ArrayHierarchical>(),
    assert: typia.createAssert<typia.PascalCase<ArrayHierarchical>>(),
  });
