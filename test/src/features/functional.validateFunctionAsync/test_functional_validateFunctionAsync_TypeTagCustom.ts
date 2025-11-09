import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_validateFunctionAsync_TypeTagCustom =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("TypeTagCustom")(TypeTagCustom)(
      (p: (input: TypeTagCustom) => Promise<TypeTagCustom>) =>
        typia.functional.validateFunction(p),
    );
