import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_notation_validatePascal_ArrayRecursive = (): void =>
  _test_notation_validateGeneral("ArrayRecursive")<ArrayRecursive>(
    ArrayRecursive,
  )<typia.PascalCase<ArrayRecursive>>({
    convert: (input) => typia.notations.validatePascal<ArrayRecursive>(input),
    assert: typia.createAssert<typia.PascalCase<ArrayRecursive>>(),
  });
