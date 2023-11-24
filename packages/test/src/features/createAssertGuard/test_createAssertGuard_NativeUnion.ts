import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_createAssertGuard_NativeUnion = _test_assertGuard(
  "NativeUnion",
)<NativeUnion>(NativeUnion)(typia.createAssertGuard<NativeUnion>());
