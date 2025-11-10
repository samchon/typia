import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_notation_createValidateKebab_ArrayRepeatedOptional =
  (): void =>
    _test_notation_validateGeneral(
      "ArrayRepeatedOptional",
    )<ArrayRepeatedOptional>(ArrayRepeatedOptional)<
      typia.KebabCase<ArrayRepeatedOptional>
    >({
      convert: typia.notations.createValidateKebab<ArrayRepeatedOptional>(),
      assert: typia.createAssert<typia.KebabCase<ArrayRepeatedOptional>>(),
    });
