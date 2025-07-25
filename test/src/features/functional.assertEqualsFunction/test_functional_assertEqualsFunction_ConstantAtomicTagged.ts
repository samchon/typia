import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_functional_assertEqualsFunction_ConstantAtomicTagged =
  (): void =>
    _test_functional_assertEqualsFunction(TypeGuardError)(
      "ConstantAtomicTagged",
    )(ConstantAtomicTagged)(
      (p: (input: ConstantAtomicTagged) => ConstantAtomicTagged) =>
        typia.functional.assertEqualsFunction(p),
    );
