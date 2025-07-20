import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_equalsParametersAsync_ObjectRecursive =
  (): Promise<void> =>
    _test_functional_equalsParametersAsync("ObjectRecursive")(ObjectRecursive)(
      (p: (input: ObjectRecursive) => Promise<ObjectRecursive>) =>
        typia.functional.equalsParameters(p),
    );
