import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_ConstantAtomicWrapper =
  _test_functional_assertEqualsFunction(TypeGuardError)(
    "ConstantAtomicWrapper",
  )(ConstantAtomicWrapper)(
    (p: (input: ConstantAtomicWrapper) => ConstantAtomicWrapper) =>
      typia.functional.assertEqualsFunction(p),
  );
