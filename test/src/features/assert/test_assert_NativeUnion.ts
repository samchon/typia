import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { NativeUnion } from "../../structures/NativeUnion";

import { TypeGuardError } from "typia";

export const test_assert_NativeUnion = _test_assert(TypeGuardError)(
  "NativeUnion",
)<NativeUnion>(NativeUnion)((input) => typia.assert<NativeUnion>(input));
