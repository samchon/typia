import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_notation_validateKebab_ArrayRepeatedOptional = (): void =>
  _test_notation_validateGeneral(
    "ArrayRepeatedOptional",
  )<ArrayRepeatedOptional>(ArrayRepeatedOptional)<
    typia.KebabCase<ArrayRepeatedOptional>
  >({
    convert: (input) =>
      typia.notations.validateKebab<ArrayRepeatedOptional>(input),
    assert: typia.createAssert<typia.KebabCase<ArrayRepeatedOptional>>(),
  });
