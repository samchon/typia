import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_functional_validateEqualsFunction_ConstantAtomicWrapper =
  (): void =>
    _test_functional_validateEqualsFunction("ConstantAtomicWrapper")(
      ConstantAtomicWrapper,
    )((p: (input: ConstantAtomicWrapper) => ConstantAtomicWrapper) =>
      typia.functional.validateEqualsFunction(p),
    );
