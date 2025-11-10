import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_notation_validateKebab_ArrayRepeatedRequired = (): void =>
  _test_notation_validateGeneral(
    "ArrayRepeatedRequired",
  )<ArrayRepeatedRequired>(ArrayRepeatedRequired)<
    typia.KebabCase<ArrayRepeatedRequired>
  >({
    convert: (input) =>
      typia.notations.validateKebab<ArrayRepeatedRequired>(input),
    assert: typia.createAssert<typia.KebabCase<ArrayRepeatedRequired>>(),
  });
