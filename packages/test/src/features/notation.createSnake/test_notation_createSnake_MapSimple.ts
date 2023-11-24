import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapSimple } from "../../structures/MapSimple";

export const test_notation_createValidateSnake_MapSimple =
  _test_notation_validateGeneral("MapSimple")<MapSimple>(MapSimple)<
    typia.SnakeCase<MapSimple>
  >({
    convert: typia.notations.createValidateSnake<MapSimple>(),
    assert: typia.createAssert<typia.SnakeCase<MapSimple>>(),
  });
