import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { UltimateUnion } from "../../structures/UltimateUnion";

import { TypeGuardError } from "typia";

export const test_assert_UltimateUnion = _test_assert(TypeGuardError)(
  "UltimateUnion",
)<UltimateUnion>(UltimateUnion)((input) => typia.assert<UltimateUnion>(input));
