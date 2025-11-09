import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_createAssertCustom_DynamicSimple = (): void =>
  _test_assert(CustomGuardError)("DynamicSimple")<DynamicSimple>(DynamicSimple)(
    typia.createAssert<DynamicSimple>((p) => new CustomGuardError(p)),
  );
