import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_functional_validateFunction_ConstantAtomicWrapper =
  (): void =>
    _test_functional_validateFunction("ConstantAtomicWrapper")(
      ConstantAtomicWrapper,
    )((p: (input: ConstantAtomicWrapper) => ConstantAtomicWrapper) =>
      typia.functional.validateFunction(p),
    );
