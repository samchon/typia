import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_validateEqualsReturnAsync_TypeTagFormat =
  _test_functional_validateEqualsReturnAsync("TypeTagFormat")(TypeTagFormat)(
    (p: (input: TypeTagFormat) => Promise<TypeTagFormat>) =>
      typia.functional.validateEqualsReturn(p),
  );
