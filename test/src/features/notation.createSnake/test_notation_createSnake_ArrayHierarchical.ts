import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_notation_createValidateSnake_ArrayHierarchical = (): void =>
    _test_notation_validateGeneral("ArrayHierarchical")<ArrayHierarchical>(
        ArrayHierarchical
  )<typia.SnakeCase<ArrayHierarchical>>({
    convert: typia.notations.createValidateSnake<ArrayHierarchical>(),
    assert: typia.createAssert<typia.SnakeCase<ArrayHierarchical>>(),
  });
