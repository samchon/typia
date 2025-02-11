import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_functional_isParameters_TypeTagRangeBigInt =
  _test_functional_isParameters("TypeTagRangeBigInt")(TypeTagRangeBigInt)(
    (p: (input: TypeTagRangeBigInt) => TypeTagRangeBigInt) =>
      typia.functional.isParameters(p),
  );
