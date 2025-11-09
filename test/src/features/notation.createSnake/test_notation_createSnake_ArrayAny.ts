import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_notation_createValidateSnake_ArrayAny = (): void =>
  _test_notation_validateGeneral("ArrayAny")<ArrayAny>(ArrayAny)<
    typia.SnakeCase<ArrayAny>
  >({
    convert: typia.notations.createValidateSnake<ArrayAny>(),
    assert: typia.createAssert<typia.SnakeCase<ArrayAny>>(),
  });
