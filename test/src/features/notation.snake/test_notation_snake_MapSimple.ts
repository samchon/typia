import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapSimple } from "../../structures/MapSimple";

export const test_notation_validateSnake_MapSimple =
  _test_notation_validateGeneral("MapSimple")<MapSimple>(MapSimple)<
    typia.SnakeCase<MapSimple>
  >({
    convert: (input) => typia.notations.validateSnake<MapSimple>(input),
    assert: typia.createAssert<typia.SnakeCase<MapSimple>>(),
  });
