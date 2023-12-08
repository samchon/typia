import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapSimple } from "../../structures/MapSimple";

export const test_notation_validateCamel_MapSimple =
  _test_notation_validateGeneral("MapSimple")<MapSimple>(MapSimple)<
    typia.CamelCase<MapSimple>
  >({
    convert: (input) => typia.notations.validateCamel<MapSimple>(input),
    assert: typia.createAssert<typia.CamelCase<MapSimple>>(),
  });
