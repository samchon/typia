import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_equalsReturn_TypeTagPattern = (): void =>
  _test_functional_equalsReturn("TypeTagPattern")(TypeTagPattern)(
    (p: (input: TypeTagPattern) => TypeTagPattern) =>
      typia.functional.equalsReturn(p),
  );
