import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_assertGuard_ConstantConstEnumeration = (): void =>
  _test_assertGuard(TypeGuardError)(
    "ConstantConstEnumeration",
  )<ConstantConstEnumeration>(ConstantConstEnumeration)((input) =>
    typia.assertGuard<ConstantConstEnumeration>(input),
  );
