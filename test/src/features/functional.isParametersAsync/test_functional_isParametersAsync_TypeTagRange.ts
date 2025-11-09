import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_isParametersAsync_TypeTagRange =
  (): Promise<void> =>
    _test_functional_isParametersAsync("TypeTagRange")(TypeTagRange)(
      (p: (input: TypeTagRange) => Promise<TypeTagRange>) =>
        typia.functional.isParameters(p),
    );
