import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { MapAlias } from "../../structures/MapAlias";

export const test_createAssertCustom_MapAlias = (): void =>
  _test_assert(CustomGuardError)("MapAlias")<MapAlias>(MapAlias)(
    typia.createAssert<MapAlias>((p) => new CustomGuardError(p)),
  );
