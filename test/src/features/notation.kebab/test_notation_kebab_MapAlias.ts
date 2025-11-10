import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapAlias } from "../../structures/MapAlias";

export const test_notation_validateKebab_MapAlias = (): void =>
  _test_notation_validateGeneral("MapAlias")<MapAlias>(MapAlias)<
    typia.KebabCase<MapAlias>
  >({
    convert: (input) => typia.notations.validateKebab<MapAlias>(input),
    assert: typia.createAssert<typia.KebabCase<MapAlias>>(),
  });
