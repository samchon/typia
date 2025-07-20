import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_validateParametersAsync_TypeTagLength =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("TypeTagLength")(TypeTagLength)(
      (p: (input: TypeTagLength) => Promise<TypeTagLength>) =>
        typia.functional.validateParameters(p),
    );
