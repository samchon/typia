import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_validateReturnAsync_TypeTagFormat =
  _test_functional_validateReturnAsync("TypeTagFormat")(TypeTagFormat)(
    (p: (input: TypeTagFormat) => Promise<TypeTagFormat>) =>
      typia.functional.validateReturn(p),
  );
