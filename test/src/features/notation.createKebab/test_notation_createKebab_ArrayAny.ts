import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_notation_createValidateKebab_ArrayAny = (): void =>
  _test_notation_validateGeneral("ArrayAny")<ArrayAny>(ArrayAny)<
    typia.KebabCase<ArrayAny>
  >({
    convert: typia.notations.createValidateKebab<ArrayAny>(),
    assert: typia.createAssert<typia.KebabCase<ArrayAny>>(),
  });
