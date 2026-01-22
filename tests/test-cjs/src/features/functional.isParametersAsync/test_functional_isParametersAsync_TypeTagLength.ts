import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_isParametersAsync_TypeTagLength =
  (): Promise<void> =>
    _test_functional_isParametersAsync("TypeTagLength")(TypeTagLength)(
      (p: (input: TypeTagLength) => Promise<TypeTagLength>) =>
        typia.functional.isParameters(p),
    );
