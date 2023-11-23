import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_notation_createValidateSnake_UltimateUnion =
  _test_notation_validateGeneral("UltimateUnion")<UltimateUnion>(UltimateUnion)<
    typia.SnakeCase<UltimateUnion>
  >({
    convert: typia.notations.createValidateSnake<UltimateUnion>(),
    assert: typia.createAssert<typia.SnakeCase<UltimateUnion>>(),
  });
