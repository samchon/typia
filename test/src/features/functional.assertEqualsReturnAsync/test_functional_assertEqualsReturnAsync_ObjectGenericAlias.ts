import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_functional_assertEqualsReturnAsync_ObjectGenericAlias =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)(
    "ObjectGenericAlias",
  )(ObjectGenericAlias)(
    (p: (input: ObjectGenericAlias) => Promise<ObjectGenericAlias>) =>
      typia.functional.assertEqualsReturn(p),
  );
