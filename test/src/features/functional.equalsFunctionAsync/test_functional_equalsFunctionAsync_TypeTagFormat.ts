import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_equalsFunctionAsync_TypeTagFormat =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("TypeTagFormat")(TypeTagFormat)(
      (p: (input: TypeTagFormat) => Promise<TypeTagFormat>) =>
        typia.functional.equalsFunction(p),
    );
