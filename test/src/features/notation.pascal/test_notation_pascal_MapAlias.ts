import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapAlias } from "../../structures/MapAlias";

export const test_notation_validatePascal_MapAlias = (): void =>
  _test_notation_validateGeneral("MapAlias")<MapAlias>(MapAlias)<
    typia.PascalCase<MapAlias>
  >({
    convert: (input) => typia.notations.validatePascal<MapAlias>(input),
    assert: typia.createAssert<typia.PascalCase<MapAlias>>(),
  });
