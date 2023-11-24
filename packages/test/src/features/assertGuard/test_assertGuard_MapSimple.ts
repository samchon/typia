import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { MapSimple } from "../../structures/MapSimple";

export const test_assertGuard_MapSimple = _test_assertGuard(
  "MapSimple",
)<MapSimple>(MapSimple)((input) => typia.assertGuard<MapSimple>(input));
