import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { MapSimple } from "../../structures/MapSimple";

export const test_createAssert_MapSimple = (): void =>
  _test_assert(TypeGuardError)("MapSimple")<MapSimple>(MapSimple)(
    typia.createAssert<MapSimple>(),
  );
