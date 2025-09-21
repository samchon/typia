import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_notation_createValidateKebab_ArrayRepeatedUnionWithTuple =
  (): void =>
    _test_notation_validateGeneral(
      "ArrayRepeatedUnionWithTuple",
    )<ArrayRepeatedUnionWithTuple>(ArrayRepeatedUnionWithTuple)<
      typia.KebabCase<ArrayRepeatedUnionWithTuple>
    >({
      convert:
        typia.notations.createValidateKebab<ArrayRepeatedUnionWithTuple>(),
      assert:
        typia.createAssert<typia.KebabCase<ArrayRepeatedUnionWithTuple>>(),
    });
