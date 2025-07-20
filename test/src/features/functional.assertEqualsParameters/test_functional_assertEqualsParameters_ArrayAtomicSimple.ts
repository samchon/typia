import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_functional_assertEqualsParameters_ArrayAtomicSimple =
  (): void =>
    _test_functional_assertEqualsParameters(TypeGuardError)(
      "ArrayAtomicSimple",
    )(ArrayAtomicSimple)((p: (input: ArrayAtomicSimple) => ArrayAtomicSimple) =>
      typia.functional.assertEqualsParameters(p),
    );
