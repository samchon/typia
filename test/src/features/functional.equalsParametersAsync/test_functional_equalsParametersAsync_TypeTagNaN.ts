import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_equalsParametersAsync_TypeTagNaN =
  _test_functional_equalsParametersAsync("TypeTagNaN")(TypeTagNaN)(
    (p: (input: TypeTagNaN) => Promise<TypeTagNaN>) =>
      typia.functional.equalsParameters(p),
  );
