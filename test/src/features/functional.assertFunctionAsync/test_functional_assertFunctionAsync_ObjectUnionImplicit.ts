import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_functional_assertFunctionAsync_ObjectUnionImplicit =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("ObjectUnionImplicit")(
      ObjectUnionImplicit,
    )((p: (input: ObjectUnionImplicit) => Promise<ObjectUnionImplicit>) =>
      typia.functional.assertFunction(p),
    );
