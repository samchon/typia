import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_functional_assertEqualsFunction_ConstantAtomicSimple =
  (): void =>
    _test_functional_assertEqualsFunction(TypeGuardError)(
      "ConstantAtomicSimple",
    )(ConstantAtomicSimple)(
      (p: (input: ConstantAtomicSimple) => ConstantAtomicSimple) =>
        typia.functional.assertEqualsFunction(p),
    );
