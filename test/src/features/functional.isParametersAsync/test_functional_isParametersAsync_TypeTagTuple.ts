import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_isParametersAsync_TypeTagTuple =
  (): Promise<void> =>
    _test_functional_isParametersAsync("TypeTagTuple")(TypeTagTuple)(
      (p: (input: TypeTagTuple) => Promise<TypeTagTuple>) =>
        typia.functional.isParameters(p),
    );
