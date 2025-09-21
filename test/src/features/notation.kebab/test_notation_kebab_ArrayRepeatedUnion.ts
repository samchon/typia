import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_notation_validateKebab_ArrayRepeatedUnion = (): void =>
  _test_notation_validateGeneral("ArrayRepeatedUnion")<ArrayRepeatedUnion>(
    ArrayRepeatedUnion,
  )<typia.KebabCase<ArrayRepeatedUnion>>({
    convert: (input) =>
      typia.notations.validateKebab<ArrayRepeatedUnion>(input),
    assert: typia.createAssert<typia.KebabCase<ArrayRepeatedUnion>>(),
  });
