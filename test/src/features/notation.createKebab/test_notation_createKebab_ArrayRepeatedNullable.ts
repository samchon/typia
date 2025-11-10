import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_notation_createValidateKebab_ArrayRepeatedNullable =
  (): void =>
    _test_notation_validateGeneral(
      "ArrayRepeatedNullable",
    )<ArrayRepeatedNullable>(ArrayRepeatedNullable)<
      typia.KebabCase<ArrayRepeatedNullable>
    >({
      convert: typia.notations.createValidateKebab<ArrayRepeatedNullable>(),
      assert: typia.createAssert<typia.KebabCase<ArrayRepeatedNullable>>(),
    });
