import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_equalsFunction_TypeTagCustom = (): void =>
  _test_functional_equalsFunction("TypeTagCustom")(TypeTagCustom)(
    (p: (input: TypeTagCustom) => TypeTagCustom) =>
      typia.functional.equalsFunction(p),
  );
