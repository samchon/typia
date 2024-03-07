import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_equalsParametersAsync_TypeTagDefault =
  _test_functional_equalsParametersAsync("TypeTagDefault")(TypeTagDefault)(
    (p: (input: TypeTagDefault) => Promise<TypeTagDefault>) =>
      typia.functional.equalsParameters(p),
  );
