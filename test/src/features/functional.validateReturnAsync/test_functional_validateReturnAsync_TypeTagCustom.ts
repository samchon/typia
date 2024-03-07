import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_validateReturnAsync_TypeTagCustom =
  _test_functional_validateReturnAsync("TypeTagCustom")(TypeTagCustom)(
    (p: (input: TypeTagCustom) => Promise<TypeTagCustom>) =>
      typia.functional.validateReturn(p),
  );
