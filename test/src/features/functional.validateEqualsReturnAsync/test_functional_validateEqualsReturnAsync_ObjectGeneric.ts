import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_validateEqualsReturnAsync_ObjectGeneric =
  (): Promise<void> =>
    _test_functional_validateEqualsReturnAsync("ObjectGeneric")(ObjectGeneric)(
      (p: (input: ObjectGeneric) => Promise<ObjectGeneric>) =>
        typia.functional.validateEqualsReturn(p),
    );
