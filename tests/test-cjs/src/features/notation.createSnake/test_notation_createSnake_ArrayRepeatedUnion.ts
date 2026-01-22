import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_notation_createValidateSnake_ArrayRepeatedUnion = (): void =>
  _test_notation_validateGeneral("ArrayRepeatedUnion")<ArrayRepeatedUnion>(
    ArrayRepeatedUnion,
  )<typia.SnakeCase<ArrayRepeatedUnion>>({
    convert: typia.notations.createValidateSnake<ArrayRepeatedUnion>(),
    assert: typia.createAssert<typia.SnakeCase<ArrayRepeatedUnion>>(),
  });
