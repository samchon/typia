import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParametersAsync_ObjectUnionExplicit =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "ObjectUnionExplicit",
  )(ObjectUnionExplicit)(
    (p: (input: ObjectUnionExplicit) => Promise<ObjectUnionExplicit>) =>
      typia.functional.assertEqualsParameters(p),
  );
