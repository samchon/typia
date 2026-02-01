import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapUnion } from "../../structures/MapUnion";

export const test_notation_createValidatePascal_MapUnion = (): void =>
    _test_notation_validateGeneral("MapUnion")<MapUnion>(
        MapUnion
  )<typia.PascalCase<MapUnion>>({
    convert: typia.notations.createValidatePascal<MapUnion>(),
    assert: typia.createAssert<typia.PascalCase<MapUnion>>(),
  });
