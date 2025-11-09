import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_assert_NativeUnion = (): void =>
  _test_assert(TypeGuardError)("NativeUnion")<NativeUnion>(NativeUnion)(
    (input) => typia.assert<NativeUnion>(input),
  );
