import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { MapSimple } from "../../structures/MapSimple";

export const test_createAssert_MapSimple = _test_assert("MapSimple")<MapSimple>(
  MapSimple,
)(typia.createAssert<MapSimple>());
