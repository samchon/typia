import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapUnion } from "../../structures/MapUnion";

export const test_notation_validatePascal_MapUnion =
  _test_notation_validateGeneral("MapUnion")<MapUnion>(MapUnion)<
    typia.PascalCase<MapUnion>
  >({
    convert: (input) => typia.notations.validatePascal<MapUnion>(input),
    assert: typia.createAssert<typia.PascalCase<MapUnion>>(),
  });
