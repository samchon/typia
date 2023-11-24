import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_createEquals_ConstantAtomicWrapper = _test_equals(
  "ConstantAtomicWrapper",
)<ConstantAtomicWrapper>(ConstantAtomicWrapper)(
  typia.createEquals<ConstantAtomicWrapper>(),
);
