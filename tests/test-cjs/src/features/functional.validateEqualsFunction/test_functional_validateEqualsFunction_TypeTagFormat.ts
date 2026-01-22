import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_validateEqualsFunction_TypeTagFormat = (): void =>
  _test_functional_validateEqualsFunction("TypeTagFormat")(TypeTagFormat)(
    (p: (input: TypeTagFormat) => TypeTagFormat) =>
      typia.functional.validateEqualsFunction(p),
  );
