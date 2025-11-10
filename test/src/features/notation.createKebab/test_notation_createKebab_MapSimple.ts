import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapSimple } from "../../structures/MapSimple";

export const test_notation_createValidateKebab_MapSimple = (): void =>
  _test_notation_validateGeneral("MapSimple")<MapSimple>(MapSimple)<
    typia.KebabCase<MapSimple>
  >({
    convert: typia.notations.createValidateKebab<MapSimple>(),
    assert: typia.createAssert<typia.KebabCase<MapSimple>>(),
  });
