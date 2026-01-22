import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_functional_validateFunction_ConstantAtomicAbsorbed =
  (): void =>
    _test_functional_validateFunction("ConstantAtomicAbsorbed")(
      ConstantAtomicAbsorbed,
    )((p: (input: ConstantAtomicAbsorbed) => ConstantAtomicAbsorbed) =>
      typia.functional.validateFunction(p),
    );
