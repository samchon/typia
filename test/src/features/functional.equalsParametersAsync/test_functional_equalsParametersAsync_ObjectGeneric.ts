import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_equalsParametersAsync_ObjectGeneric =
  (): Promise<void> =>
    _test_functional_equalsParametersAsync("ObjectGeneric")(ObjectGeneric)(
      (p: (input: ObjectGeneric) => Promise<ObjectGeneric>) =>
        typia.functional.equalsParameters(p),
    );
