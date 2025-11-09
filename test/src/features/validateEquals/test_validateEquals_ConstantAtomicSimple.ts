import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_validateEquals_ConstantAtomicSimple = (): void =>
  _test_validateEquals("ConstantAtomicSimple")<ConstantAtomicSimple>(
    ConstantAtomicSimple,
  )((input) => typia.validateEquals<ConstantAtomicSimple>(input));
