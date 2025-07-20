import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_functional_isReturn_TypeTagInfinite = (): void =>
  _test_functional_isReturn("TypeTagInfinite")(TypeTagInfinite)(
    (p: (input: TypeTagInfinite) => TypeTagInfinite) =>
      typia.functional.isReturn(p),
  );
