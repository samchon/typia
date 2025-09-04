import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_equalsReturn_TypeTagFormat = (): void =>
  _test_functional_equalsReturn("TypeTagFormat")(TypeTagFormat)(
    (p: (input: TypeTagFormat) => TypeTagFormat) =>
      typia.functional.equalsReturn(p),
  );
