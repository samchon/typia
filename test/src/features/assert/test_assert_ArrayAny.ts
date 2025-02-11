import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_assert_ArrayAny = _test_assert(TypeGuardError)(
  "ArrayAny",
)<ArrayAny>(ArrayAny)((input) => typia.assert<ArrayAny>(input));
