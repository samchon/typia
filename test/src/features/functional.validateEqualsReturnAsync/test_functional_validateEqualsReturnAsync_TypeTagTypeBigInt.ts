import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_functional_validateEqualsReturnAsync_TypeTagTypeBigInt =
  _test_functional_validateEqualsReturnAsync("TypeTagTypeBigInt")(
    TypeTagTypeBigInt,
  )((p: (input: TypeTagTypeBigInt) => Promise<TypeTagTypeBigInt>) =>
    typia.functional.validateEqualsReturn(p),
  );
