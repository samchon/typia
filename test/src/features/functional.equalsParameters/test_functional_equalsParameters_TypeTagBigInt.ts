import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_functional_equalsParameters_TypeTagBigInt = (): void =>
  _test_functional_equalsParameters("TypeTagBigInt")(TypeTagBigInt)(
    (p: (input: TypeTagBigInt) => TypeTagBigInt) =>
      typia.functional.equalsParameters(p),
  );
