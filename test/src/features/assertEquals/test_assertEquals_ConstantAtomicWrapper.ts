import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_assertEquals_ConstantAtomicWrapper = _test_assertEquals(
  "ConstantAtomicWrapper",
)<ConstantAtomicWrapper>(ConstantAtomicWrapper)((input) =>
  typia.assertEquals<ConstantAtomicWrapper>(input),
);
