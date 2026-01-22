import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_isReturn_TypeTagPattern = (): void =>
  _test_functional_isReturn("TypeTagPattern")(TypeTagPattern)(
    (p: (input: TypeTagPattern) => TypeTagPattern) =>
      typia.functional.isReturn(p),
  );
