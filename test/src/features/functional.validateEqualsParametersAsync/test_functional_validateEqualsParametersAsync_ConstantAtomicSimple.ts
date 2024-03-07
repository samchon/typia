import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_functional_validateEqualsParametersAsync_ConstantAtomicSimple =
  _test_functional_validateEqualsParametersAsync("ConstantAtomicSimple")(
    ConstantAtomicSimple,
  )((p: (input: ConstantAtomicSimple) => Promise<ConstantAtomicSimple>) =>
    typia.functional.validateEqualsParameters(p),
  );
