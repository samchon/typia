import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_assert_DynamicUnion = (): void =>
  _test_assert(TypeGuardError)("DynamicUnion")<DynamicUnion>(DynamicUnion)(
    (input) => typia.assert<DynamicUnion>(input),
  );
