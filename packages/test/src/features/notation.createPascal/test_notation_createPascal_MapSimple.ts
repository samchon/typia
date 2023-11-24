import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapSimple } from "../../structures/MapSimple";

export const test_notation_createValidatePascal_MapSimple =
  _test_notation_validateGeneral("MapSimple")<MapSimple>(MapSimple)<
    typia.PascalCase<MapSimple>
  >({
    convert: typia.notations.createValidatePascal<MapSimple>(),
    assert: typia.createAssert<typia.PascalCase<MapSimple>>(),
  });
