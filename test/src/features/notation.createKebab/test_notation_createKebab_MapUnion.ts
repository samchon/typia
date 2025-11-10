import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapUnion } from "../../structures/MapUnion";

export const test_notation_createValidateKebab_MapUnion = (): void =>
  _test_notation_validateGeneral("MapUnion")<MapUnion>(MapUnion)<
    typia.KebabCase<MapUnion>
  >({
    convert: typia.notations.createValidateKebab<MapUnion>(),
    assert: typia.createAssert<typia.KebabCase<MapUnion>>(),
  });
