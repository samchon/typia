import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { MapAlias } from "../../structures/MapAlias";

export const test_createAssertGuard_MapAlias = (): void =>
  _test_assertGuard(TypeGuardError)("MapAlias")<MapAlias>(MapAlias)(
    typia.createAssertGuard<MapAlias>(),
  );
