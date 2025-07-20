import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_isParameters_TypeTagNaN = (): void =>
  _test_functional_isParameters("TypeTagNaN")(TypeTagNaN)(
    (p: (input: TypeTagNaN) => TypeTagNaN) => typia.functional.isParameters(p),
  );
