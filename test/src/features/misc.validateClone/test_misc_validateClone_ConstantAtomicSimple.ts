import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_misc_validateClone_ConstantAtomicSimple = (): void =>
  _test_misc_validateClone("ConstantAtomicSimple")<ConstantAtomicSimple>(
    ConstantAtomicSimple,
  )((input) => typia.misc.validateClone<ConstantAtomicSimple>(input));
