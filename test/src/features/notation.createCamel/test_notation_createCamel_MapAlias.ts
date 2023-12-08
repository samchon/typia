import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapAlias } from "../../structures/MapAlias";

export const test_notation_createValidateCamel_MapAlias =
  _test_notation_validateGeneral("MapAlias")<MapAlias>(MapAlias)<
    typia.CamelCase<MapAlias>
  >({
    convert: typia.notations.createValidateCamel<MapAlias>(),
    assert: typia.createAssert<typia.CamelCase<MapAlias>>(),
  });
