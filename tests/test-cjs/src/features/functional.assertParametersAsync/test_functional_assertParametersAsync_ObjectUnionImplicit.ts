import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_functional_assertParametersAsync_ObjectUnionImplicit =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)(
      "ObjectUnionImplicit",
    )(ObjectUnionImplicit)(
      (p: (input: ObjectUnionImplicit) => Promise<ObjectUnionImplicit>) =>
        typia.functional.assertParameters(p),
    );
