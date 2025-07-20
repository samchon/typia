import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_functional_assertEqualsParametersCustom_ArrayAtomicSimple =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)(
      "ArrayAtomicSimple",
    )(ArrayAtomicSimple)((p: (input: ArrayAtomicSimple) => ArrayAtomicSimple) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
