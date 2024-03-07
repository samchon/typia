import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_validateReturnAsync_TypeTagType =
  _test_functional_validateReturnAsync("TypeTagType")(TypeTagType)(
    (p: (input: TypeTagType) => Promise<TypeTagType>) =>
      typia.functional.validateReturn(p),
  );
