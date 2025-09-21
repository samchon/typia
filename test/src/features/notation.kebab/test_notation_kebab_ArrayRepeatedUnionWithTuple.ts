import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_notation_validateKebab_ArrayRepeatedUnionWithTuple =
  (): void =>
    _test_notation_validateGeneral(
      "ArrayRepeatedUnionWithTuple",
    )<ArrayRepeatedUnionWithTuple>(ArrayRepeatedUnionWithTuple)<
      typia.KebabCase<ArrayRepeatedUnionWithTuple>
    >({
      convert: (input) =>
        typia.notations.validateKebab<ArrayRepeatedUnionWithTuple>(input),
      assert:
        typia.createAssert<typia.KebabCase<ArrayRepeatedUnionWithTuple>>(),
    });
