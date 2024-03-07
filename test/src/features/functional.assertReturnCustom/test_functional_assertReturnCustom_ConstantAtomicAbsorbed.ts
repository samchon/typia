import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_ConstantAtomicAbsorbed =
  _test_functional_assertReturn(CustomGuardError)("ConstantAtomicAbsorbed")(
    ConstantAtomicAbsorbed,
  )((p: (input: ConstantAtomicAbsorbed) => ConstantAtomicAbsorbed) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
