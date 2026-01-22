import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_functional_isParametersAsync_ObjectDynamic =
  (): Promise<void> =>
    _test_functional_isParametersAsync("ObjectDynamic")(ObjectDynamic)(
      (p: (input: ObjectDynamic) => Promise<ObjectDynamic>) =>
        typia.functional.isParameters(p),
    );
