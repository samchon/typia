import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_notation_validatePascal_ArrayRepeatedUnionWithTuple =
  _test_notation_validateGeneral(
    "ArrayRepeatedUnionWithTuple",
  )<ArrayRepeatedUnionWithTuple>(ArrayRepeatedUnionWithTuple)<
    typia.PascalCase<ArrayRepeatedUnionWithTuple>
  >({
    convert: (input) =>
      typia.notations.validatePascal<ArrayRepeatedUnionWithTuple>(input),
    assert: typia.createAssert<typia.PascalCase<ArrayRepeatedUnionWithTuple>>(),
  });
