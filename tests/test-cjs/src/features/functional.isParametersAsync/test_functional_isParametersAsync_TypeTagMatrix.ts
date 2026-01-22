import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_isParametersAsync_TypeTagMatrix =
  (): Promise<void> =>
    _test_functional_isParametersAsync("TypeTagMatrix")(TypeTagMatrix)(
      (p: (input: TypeTagMatrix) => Promise<TypeTagMatrix>) =>
        typia.functional.isParameters(p),
    );
