import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_isReturn_TypeTagFormat = (): void =>
  _test_functional_isReturn("TypeTagFormat")(TypeTagFormat)(
    (p: (input: TypeTagFormat) => TypeTagFormat) =>
      typia.functional.isReturn(p),
  );
