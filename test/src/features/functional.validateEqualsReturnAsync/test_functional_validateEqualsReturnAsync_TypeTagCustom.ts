import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_validateEqualsReturnAsync_TypeTagCustom =
  (): Promise<void> =>
    _test_functional_validateEqualsReturnAsync("TypeTagCustom")(TypeTagCustom)(
      (p: (input: TypeTagCustom) => Promise<TypeTagCustom>) =>
        typia.functional.validateEqualsReturn(p),
    );
