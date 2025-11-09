import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_validateReturnAsync_ObjectGeneric =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("ObjectGeneric")(ObjectGeneric)(
      (p: (input: ObjectGeneric) => Promise<ObjectGeneric>) =>
        typia.functional.validateReturn(p),
    );
