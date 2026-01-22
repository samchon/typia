import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_assertParametersAsync_ObjectAlias =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("ObjectAlias")(
      ObjectAlias,
    )((p: (input: ObjectAlias) => Promise<ObjectAlias>) =>
      typia.functional.assertParameters(p),
    );
