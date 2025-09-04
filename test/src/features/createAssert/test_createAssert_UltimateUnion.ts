import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_createAssert_UltimateUnion = (): void =>
  _test_assert(TypeGuardError)("UltimateUnion")<UltimateUnion>(UltimateUnion)(
    typia.createAssert<UltimateUnion>(),
  );
