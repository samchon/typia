import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_assert_DynamicNever = (): void =>
  _test_assert(TypeGuardError)("DynamicNever")<DynamicNever>(DynamicNever)(
    (input) => typia.assert<DynamicNever>(input),
  );
