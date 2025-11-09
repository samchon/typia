import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_equalsParametersAsync_TypeTagCustom =
  (): Promise<void> =>
    _test_functional_equalsParametersAsync("TypeTagCustom")(TypeTagCustom)(
      (p: (input: TypeTagCustom) => Promise<TypeTagCustom>) =>
        typia.functional.equalsParameters(p),
    );
