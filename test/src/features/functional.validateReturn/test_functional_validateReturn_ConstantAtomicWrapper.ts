import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_functional_validateReturn_ConstantAtomicWrapper =
  _test_functional_validateReturn("ConstantAtomicWrapper")(
    ConstantAtomicWrapper,
  )((p: (input: ConstantAtomicWrapper) => ConstantAtomicWrapper) =>
    typia.functional.validateReturn(p),
  );
