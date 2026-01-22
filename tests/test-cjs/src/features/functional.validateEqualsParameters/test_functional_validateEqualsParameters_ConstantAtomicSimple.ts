import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_functional_validateEqualsParameters_ConstantAtomicSimple =
  (): void =>
    _test_functional_validateEqualsParameters("ConstantAtomicSimple")(
      ConstantAtomicSimple,
    )((p: (input: ConstantAtomicSimple) => ConstantAtomicSimple) =>
      typia.functional.validateEqualsParameters(p),
    );
