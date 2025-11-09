import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_notation_createValidatePascal_ArrayHierarchicalPointer = (): void =>
    _test_notation_validateGeneral("ArrayHierarchicalPointer")<ArrayHierarchicalPointer>(
        ArrayHierarchicalPointer
  )<typia.PascalCase<ArrayHierarchicalPointer>>({
    convert: typia.notations.createValidatePascal<ArrayHierarchicalPointer>(),
    assert: typia.createAssert<typia.PascalCase<ArrayHierarchicalPointer>>(),
  });
