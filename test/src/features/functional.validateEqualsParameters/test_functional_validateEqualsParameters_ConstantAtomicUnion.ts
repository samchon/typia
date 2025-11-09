import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_functional_validateEqualsParameters_ConstantAtomicUnion =
  (): void =>
    _test_functional_validateEqualsParameters("ConstantAtomicUnion")(
      ConstantAtomicUnion,
    )((p: (input: ConstantAtomicUnion) => ConstantAtomicUnion) =>
      typia.functional.validateEqualsParameters(p),
    );
