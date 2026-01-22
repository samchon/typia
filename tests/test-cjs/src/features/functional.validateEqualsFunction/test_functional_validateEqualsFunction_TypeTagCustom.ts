import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_validateEqualsFunction_TypeTagCustom = (): void =>
  _test_functional_validateEqualsFunction("TypeTagCustom")(TypeTagCustom)(
    (p: (input: TypeTagCustom) => TypeTagCustom) =>
      typia.functional.validateEqualsFunction(p),
  );
