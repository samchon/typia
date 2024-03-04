import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_functional_assertParametersCustom_ConstantAtomicUnion =
  _test_functional_assertParameters(CustomGuardError)("ConstantAtomicUnion")(
    ConstantAtomicUnion,
  )((p: (input: ConstantAtomicUnion) => ConstantAtomicUnion) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
