import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_createAssertCustom_ConstantEnumeration = (): void =>
  _test_assert(CustomGuardError)("ConstantEnumeration")<ConstantEnumeration>(
    ConstantEnumeration,
  )(typia.createAssert<ConstantEnumeration>((p) => new CustomGuardError(p)));
