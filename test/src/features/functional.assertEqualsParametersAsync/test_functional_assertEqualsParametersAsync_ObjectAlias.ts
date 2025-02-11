import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_assertEqualsParametersAsync_ObjectAlias =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)("ObjectAlias")(
    ObjectAlias,
  )((p: (input: ObjectAlias) => Promise<ObjectAlias>) =>
    typia.functional.assertEqualsParameters(p),
  );
