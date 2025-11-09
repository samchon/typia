import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_functional_isParameters_ArrayAny = (): void =>
  _test_functional_isParameters("ArrayAny")(ArrayAny)(
    (p: (input: ArrayAny) => ArrayAny) => typia.functional.isParameters(p),
  );
