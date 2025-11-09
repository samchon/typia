import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { MapAlias } from "../../structures/MapAlias";

export const test_assertCustom_MapAlias = (): void =>
  _test_assert(CustomGuardError)("MapAlias")<MapAlias>(MapAlias)((input) =>
    typia.assert<MapAlias>(input, (p) => new CustomGuardError(p)),
  );
