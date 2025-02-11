import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_functional_equalsParametersAsync_TypeTagRangeBigInt =
  _test_functional_equalsParametersAsync("TypeTagRangeBigInt")(
    TypeTagRangeBigInt,
  )((p: (input: TypeTagRangeBigInt) => Promise<TypeTagRangeBigInt>) =>
    typia.functional.equalsParameters(p),
  );
