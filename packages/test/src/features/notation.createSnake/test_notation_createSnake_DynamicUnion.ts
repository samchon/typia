import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_notation_createValidateSnake_DynamicUnion =
  _test_notation_validateGeneral("DynamicUnion")<DynamicUnion>(DynamicUnion)<
    typia.SnakeCase<DynamicUnion>
  >({
    convert: typia.notations.createValidateSnake<DynamicUnion>(),
    assert: typia.createAssert<typia.SnakeCase<DynamicUnion>>(),
  });
