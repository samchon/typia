import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_validateEqualsReturnAsync_TypeTagLength =
  _test_functional_validateEqualsReturnAsync("TypeTagLength")(TypeTagLength)(
    (p: (input: TypeTagLength) => Promise<TypeTagLength>) =>
      typia.functional.validateEqualsReturn(p),
  );
