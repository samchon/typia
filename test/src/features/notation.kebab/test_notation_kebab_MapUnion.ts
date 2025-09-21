import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapUnion } from "../../structures/MapUnion";

export const test_notation_validateKebab_MapUnion = (): void =>
  _test_notation_validateGeneral("MapUnion")<MapUnion>(MapUnion)<
    typia.KebabCase<MapUnion>
  >({
    convert: (input) => typia.notations.validateKebab<MapUnion>(input),
    assert: typia.createAssert<typia.KebabCase<MapUnion>>(),
  });
