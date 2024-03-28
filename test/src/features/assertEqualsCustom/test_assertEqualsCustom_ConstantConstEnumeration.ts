import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_assertEqualsCustom_ConstantConstEnumeration =
  _test_assertEquals(CustomGuardError)(
    "ConstantConstEnumeration",
  )<ConstantConstEnumeration>(ConstantConstEnumeration)((input) =>
    typia.assertEquals<ConstantConstEnumeration>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
