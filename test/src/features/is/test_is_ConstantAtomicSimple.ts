import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_is_ConstantAtomicSimple = (): void =>
  _test_is("ConstantAtomicSimple")<ConstantAtomicSimple>(ConstantAtomicSimple)(
    (input) => typia.is<ConstantAtomicSimple>(input),
  );
