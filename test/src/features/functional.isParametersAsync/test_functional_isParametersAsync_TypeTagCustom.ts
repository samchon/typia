import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_isParametersAsync_TypeTagCustom =
  _test_functional_isParametersAsync("TypeTagCustom")(TypeTagCustom)(
    (p: (input: TypeTagCustom) => Promise<TypeTagCustom>) =>
      typia.functional.isParameters(p),
  );
