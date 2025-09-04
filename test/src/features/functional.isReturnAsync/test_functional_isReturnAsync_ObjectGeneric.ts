import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_isReturnAsync_ObjectGeneric = (): Promise<void> =>
  _test_functional_isReturnAsync("ObjectGeneric")(ObjectGeneric)(
    (p: (input: ObjectGeneric) => Promise<ObjectGeneric>) =>
      typia.functional.isReturn(p),
  );
