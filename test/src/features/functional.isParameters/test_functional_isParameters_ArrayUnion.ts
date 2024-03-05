import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_isParameters_ArrayUnion =
  _test_functional_isParameters("ArrayUnion")(ArrayUnion)(
    (p: (input: ArrayUnion) => ArrayUnion) => typia.functional.isParameters(p),
  );
