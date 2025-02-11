import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_functional_assertEqualsParametersAsync_ObjectUnionImplicit =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "ObjectUnionImplicit",
  )(ObjectUnionImplicit)(
    (p: (input: ObjectUnionImplicit) => Promise<ObjectUnionImplicit>) =>
      typia.functional.assertEqualsParameters(p),
  );
