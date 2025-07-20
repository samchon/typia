import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_validateEqualsReturn_TypeTagFormat = (): void =>
  _test_functional_validateEqualsReturn("TypeTagFormat")(TypeTagFormat)(
    (p: (input: TypeTagFormat) => TypeTagFormat) =>
      typia.functional.validateEqualsReturn(p),
  );
