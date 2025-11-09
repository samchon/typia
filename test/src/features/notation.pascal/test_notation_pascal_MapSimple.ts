import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapSimple } from "../../structures/MapSimple";

export const test_notation_validatePascal_MapSimple = (): void =>
  _test_notation_validateGeneral("MapSimple")<MapSimple>(MapSimple)<
    typia.PascalCase<MapSimple>
  >({
    convert: (input) => typia.notations.validatePascal<MapSimple>(input),
    assert: typia.createAssert<typia.PascalCase<MapSimple>>(),
  });
