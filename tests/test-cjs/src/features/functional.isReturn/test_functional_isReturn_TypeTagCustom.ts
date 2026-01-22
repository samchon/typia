import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_isReturn_TypeTagCustom = (): void =>
  _test_functional_isReturn("TypeTagCustom")(TypeTagCustom)(
    (p: (input: TypeTagCustom) => TypeTagCustom) =>
      typia.functional.isReturn(p),
  );
