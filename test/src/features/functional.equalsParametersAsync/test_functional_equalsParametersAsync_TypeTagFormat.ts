import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_equalsParametersAsync_TypeTagFormat =
  (): Promise<void> =>
    _test_functional_equalsParametersAsync("TypeTagFormat")(TypeTagFormat)(
      (p: (input: TypeTagFormat) => Promise<TypeTagFormat>) =>
        typia.functional.equalsParameters(p),
    );
