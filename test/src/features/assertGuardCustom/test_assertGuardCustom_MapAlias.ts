import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { MapAlias } from "../../structures/MapAlias";

export const test_assertGuardCustom_MapAlias = (): void =>
  _test_assertGuard(CustomGuardError)("MapAlias")<MapAlias>(MapAlias)((input) =>
    typia.assertGuard<MapAlias>(input, (p) => new CustomGuardError(p)),
  );
