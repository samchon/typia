import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_validateEqualsReturnAsync_TypeTagMatrix =
  _test_functional_validateEqualsReturnAsync("TypeTagMatrix")(TypeTagMatrix)(
    (p: (input: TypeTagMatrix) => Promise<TypeTagMatrix>) =>
      typia.functional.validateEqualsReturn(p),
  );
