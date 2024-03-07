import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

import { TypeGuardError } from "typia";

export const test_assert_ToJsonUnion = _test_assert(TypeGuardError)(
  "ToJsonUnion",
)<ToJsonUnion>(ToJsonUnion)((input) => typia.assert<ToJsonUnion>(input));
