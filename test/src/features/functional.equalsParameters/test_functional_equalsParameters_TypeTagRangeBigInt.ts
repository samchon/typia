import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_functional_equalsParameters_TypeTagRangeBigInt =
  _test_functional_equalsParameters("TypeTagRangeBigInt")(TypeTagRangeBigInt)(
    (p: (input: TypeTagRangeBigInt) => TypeTagRangeBigInt) =>
      typia.functional.equalsParameters(p),
  );
