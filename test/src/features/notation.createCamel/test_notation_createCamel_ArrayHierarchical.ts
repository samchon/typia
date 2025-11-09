import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_notation_createValidateCamel_ArrayHierarchical = (): void =>
    _test_notation_validateGeneral("ArrayHierarchical")<ArrayHierarchical>(
        ArrayHierarchical
  )<typia.CamelCase<ArrayHierarchical>>({
    convert: typia.notations.createValidateCamel<ArrayHierarchical>(),
    assert: typia.createAssert<typia.CamelCase<ArrayHierarchical>>(),
  });
