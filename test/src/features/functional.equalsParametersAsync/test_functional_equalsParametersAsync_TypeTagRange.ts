import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_equalsParametersAsync_TypeTagRange =
  _test_functional_equalsParametersAsync("TypeTagRange")(TypeTagRange)(
    (p: (input: TypeTagRange) => Promise<TypeTagRange>) =>
      typia.functional.equalsParameters(p),
  );
