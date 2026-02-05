import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_notation_createValidateKebab_ArraySimple = (): void =>
  _test_notation_validateGeneral("ArraySimple")<ArraySimple>(ArraySimple)<
    typia.KebabCase<ArraySimple>
  >({
    convert: typia.notations.createValidateKebab<ArraySimple>(),
    assert: typia.createAssert<typia.KebabCase<ArraySimple>>(),
  });
