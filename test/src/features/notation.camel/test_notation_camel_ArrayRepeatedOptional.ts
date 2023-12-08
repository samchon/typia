import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_notation_validateCamel_ArrayRepeatedOptional =
  _test_notation_validateGeneral(
    "ArrayRepeatedOptional",
  )<ArrayRepeatedOptional>(ArrayRepeatedOptional)<
    typia.CamelCase<ArrayRepeatedOptional>
  >({
    convert: (input) =>
      typia.notations.validateCamel<ArrayRepeatedOptional>(input),
    assert: typia.createAssert<typia.CamelCase<ArrayRepeatedOptional>>(),
  });
