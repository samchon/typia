import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_assertEquals_ConstantAtomicSimple = (): void =>
  _test_assertEquals(TypeGuardError)(
    "ConstantAtomicSimple",
  )<ConstantAtomicSimple>(ConstantAtomicSimple)((input) =>
    typia.assertEquals<ConstantAtomicSimple>(input),
  );
