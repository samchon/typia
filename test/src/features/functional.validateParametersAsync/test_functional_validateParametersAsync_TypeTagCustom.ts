import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_validateParametersAsync_TypeTagCustom =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("TypeTagCustom")(TypeTagCustom)(
      (p: (input: TypeTagCustom) => Promise<TypeTagCustom>) =>
        typia.functional.validateParameters(p),
    );
