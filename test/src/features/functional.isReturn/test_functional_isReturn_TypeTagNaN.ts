import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_isReturn_TypeTagNaN = (): void =>
  _test_functional_isReturn("TypeTagNaN")(TypeTagNaN)(
    (p: (input: TypeTagNaN) => TypeTagNaN) => typia.functional.isReturn(p),
  );
