import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_functional_equalsParametersAsync_TypeTagInfinite =
  (): Promise<void> =>
    _test_functional_equalsParametersAsync("TypeTagInfinite")(TypeTagInfinite)(
      (p: (input: TypeTagInfinite) => Promise<TypeTagInfinite>) =>
        typia.functional.equalsParameters(p),
    );
