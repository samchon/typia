import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_assertEqualsReturnAsync_ObjectAlias =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("ObjectAlias")(
    ObjectAlias,
  )((p: (input: ObjectAlias) => Promise<ObjectAlias>) =>
    typia.functional.assertEqualsReturn(p),
  );
