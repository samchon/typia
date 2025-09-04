import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_isParametersAsync_TypeTagNaN = (): Promise<void> =>
  _test_functional_isParametersAsync("TypeTagNaN")(TypeTagNaN)(
    (p: (input: TypeTagNaN) => Promise<TypeTagNaN>) =>
      typia.functional.isParameters(p),
  );
