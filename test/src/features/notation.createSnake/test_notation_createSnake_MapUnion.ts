import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapUnion } from "../../structures/MapUnion";

export const test_notation_createValidateSnake_MapUnion = (): void =>
  _test_notation_validateGeneral("MapUnion")<MapUnion>(MapUnion)<
    typia.SnakeCase<MapUnion>
  >({
    convert: typia.notations.createValidateSnake<MapUnion>(),
    assert: typia.createAssert<typia.SnakeCase<MapUnion>>(),
  });
