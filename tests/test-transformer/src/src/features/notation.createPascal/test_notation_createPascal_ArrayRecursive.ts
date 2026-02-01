import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_notation_createValidatePascal_ArrayRecursive = (): void =>
    _test_notation_validateGeneral("ArrayRecursive")<ArrayRecursive>(
        ArrayRecursive
  )<typia.PascalCase<ArrayRecursive>>({
    convert: typia.notations.createValidatePascal<ArrayRecursive>(),
    assert: typia.createAssert<typia.PascalCase<ArrayRecursive>>(),
  });
