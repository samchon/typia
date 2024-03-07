import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { MapSimple } from "../../structures/MapSimple";

import { TypeGuardError } from "typia";

export const test_createAssert_MapSimple = _test_assert(TypeGuardError)(
  "MapSimple",
)<MapSimple>(MapSimple)(typia.createAssert<MapSimple>());
