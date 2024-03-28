import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_assertReturnAsync_ObjectAlias =
  _test_functional_assertReturnAsync(TypeGuardError)("ObjectAlias")(
    ObjectAlias,
  )((p: (input: ObjectAlias) => Promise<ObjectAlias>) =>
    typia.functional.assertReturn(p),
  );
