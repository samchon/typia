import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_validateParametersAsync_TypeTagFormat =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("TypeTagFormat")(TypeTagFormat)(
      (p: (input: TypeTagFormat) => Promise<TypeTagFormat>) =>
        typia.functional.validateParameters(p),
    );
