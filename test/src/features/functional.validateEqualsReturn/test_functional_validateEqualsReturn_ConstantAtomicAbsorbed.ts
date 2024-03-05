import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_functional_validateEqualsReturn_ConstantAtomicAbsorbed =
  _test_functional_validateEqualsReturn("ConstantAtomicAbsorbed")(
    ConstantAtomicAbsorbed,
  )((p: (input: ConstantAtomicAbsorbed) => ConstantAtomicAbsorbed) =>
    typia.functional.validateEqualsReturn(p),
  );
