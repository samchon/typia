import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapAlias } from "../../structures/MapAlias";

export const test_notation_createValidateKebab_MapAlias = (): void =>
  _test_notation_validateGeneral("MapAlias")<MapAlias>(MapAlias)<
    typia.KebabCase<MapAlias>
  >({
    convert: typia.notations.createValidateKebab<MapAlias>(),
    assert: typia.createAssert<typia.KebabCase<MapAlias>>(),
  });
