import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_notation_createValidateKebab_ArrayRecursive = (): void =>
  _test_notation_validateGeneral("ArrayRecursive")<ArrayRecursive>(
    ArrayRecursive,
  )<typia.KebabCase<ArrayRecursive>>({
    convert: typia.notations.createValidateKebab<ArrayRecursive>(),
    assert: typia.createAssert<typia.KebabCase<ArrayRecursive>>(),
  });
