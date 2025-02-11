import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_equalsReturnAsync_TypeTagCustom =
  _test_functional_equalsReturnAsync("TypeTagCustom")(TypeTagCustom)(
    (p: (input: TypeTagCustom) => Promise<TypeTagCustom>) =>
      typia.functional.equalsReturn(p),
  );
