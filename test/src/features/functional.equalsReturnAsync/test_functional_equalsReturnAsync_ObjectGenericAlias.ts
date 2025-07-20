import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_functional_equalsReturnAsync_ObjectGenericAlias =
  (): Promise<void> =>
    _test_functional_equalsReturnAsync("ObjectGenericAlias")(
      ObjectGenericAlias,
    )((p: (input: ObjectGenericAlias) => Promise<ObjectGenericAlias>) =>
      typia.functional.equalsReturn(p),
    );
