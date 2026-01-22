import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_functional_isReturnAsync_ObjectGenericAlias =
  (): Promise<void> =>
    _test_functional_isReturnAsync("ObjectGenericAlias")(ObjectGenericAlias)(
      (p: (input: ObjectGenericAlias) => Promise<ObjectGenericAlias>) =>
        typia.functional.isReturn(p),
    );
