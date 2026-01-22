import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_functional_validateEqualsParameters_ConstantAtomicAbsorbed =
  (): void =>
    _test_functional_validateEqualsParameters("ConstantAtomicAbsorbed")(
      ConstantAtomicAbsorbed,
    )((p: (input: ConstantAtomicAbsorbed) => ConstantAtomicAbsorbed) =>
      typia.functional.validateEqualsParameters(p),
    );
