import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_createAssertEqualsCustom_ConstantAtomicWrapper = (): void =>
  _test_assertEquals(CustomGuardError)(
    "ConstantAtomicWrapper",
  )<ConstantAtomicWrapper>(ConstantAtomicWrapper)(
    typia.createAssertEquals<ConstantAtomicWrapper>(
      (p) => new CustomGuardError(p),
    ),
  );
