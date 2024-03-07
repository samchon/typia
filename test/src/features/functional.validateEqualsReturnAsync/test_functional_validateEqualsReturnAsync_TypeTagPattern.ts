import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_validateEqualsReturnAsync_TypeTagPattern =
  _test_functional_validateEqualsReturnAsync("TypeTagPattern")(TypeTagPattern)(
    (p: (input: TypeTagPattern) => Promise<TypeTagPattern>) =>
      typia.functional.validateEqualsReturn(p),
  );
