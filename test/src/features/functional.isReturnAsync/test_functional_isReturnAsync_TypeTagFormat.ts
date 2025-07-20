import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_isReturnAsync_TypeTagFormat = (): Promise<void> =>
  _test_functional_isReturnAsync("TypeTagFormat")(TypeTagFormat)(
    (p: (input: TypeTagFormat) => Promise<TypeTagFormat>) =>
      typia.functional.isReturn(p),
  );
