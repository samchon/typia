import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_createAssertCustom_ConstantConstEnumeration = (): void =>
  _test_assert(CustomGuardError)(
    "ConstantConstEnumeration",
  )<ConstantConstEnumeration>(ConstantConstEnumeration)(
    typia.createAssert<ConstantConstEnumeration>(
      (p) => new CustomGuardError(p),
    ),
  );
