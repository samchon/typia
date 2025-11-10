import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_notation_validateKebab_ArrayRepeatedNullable = (): void =>
  _test_notation_validateGeneral(
    "ArrayRepeatedNullable",
  )<ArrayRepeatedNullable>(ArrayRepeatedNullable)<
    typia.KebabCase<ArrayRepeatedNullable>
  >({
    convert: (input) =>
      typia.notations.validateKebab<ArrayRepeatedNullable>(input),
    assert: typia.createAssert<typia.KebabCase<ArrayRepeatedNullable>>(),
  });
