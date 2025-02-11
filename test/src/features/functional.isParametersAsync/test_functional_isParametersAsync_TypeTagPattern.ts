import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_isParametersAsync_TypeTagPattern =
  _test_functional_isParametersAsync("TypeTagPattern")(TypeTagPattern)(
    (p: (input: TypeTagPattern) => Promise<TypeTagPattern>) =>
      typia.functional.isParameters(p),
  );
