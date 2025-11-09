import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_notation_validatePascal_ArrayRepeatedRequired = (): void =>
  _test_notation_validateGeneral(
    "ArrayRepeatedRequired",
  )<ArrayRepeatedRequired>(ArrayRepeatedRequired)<
    typia.PascalCase<ArrayRepeatedRequired>
  >({
    convert: (input) =>
      typia.notations.validatePascal<ArrayRepeatedRequired>(input),
    assert: typia.createAssert<typia.PascalCase<ArrayRepeatedRequired>>(),
  });
