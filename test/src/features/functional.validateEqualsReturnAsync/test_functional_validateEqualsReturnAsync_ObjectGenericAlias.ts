import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_functional_validateEqualsReturnAsync_ObjectGenericAlias =
  (): Promise<void> =>
    _test_functional_validateEqualsReturnAsync("ObjectGenericAlias")(
      ObjectGenericAlias,
    )((p: (input: ObjectGenericAlias) => Promise<ObjectGenericAlias>) =>
      typia.functional.validateEqualsReturn(p),
    );
