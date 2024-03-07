import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_ConstantAtomicWrapper = _test_assertEquals(
  CustomGuardError,
)("ConstantAtomicWrapper")<ConstantAtomicWrapper>(ConstantAtomicWrapper)(
  (input) =>
    typia.assertEquals<ConstantAtomicWrapper>(
      input,
      (p) => new CustomGuardError(p),
    ),
);
