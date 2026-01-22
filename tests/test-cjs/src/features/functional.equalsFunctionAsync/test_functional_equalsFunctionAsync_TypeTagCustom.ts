import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_equalsFunctionAsync_TypeTagCustom =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("TypeTagCustom")(TypeTagCustom)(
      (p: (input: TypeTagCustom) => Promise<TypeTagCustom>) =>
        typia.functional.equalsFunction(p),
    );
