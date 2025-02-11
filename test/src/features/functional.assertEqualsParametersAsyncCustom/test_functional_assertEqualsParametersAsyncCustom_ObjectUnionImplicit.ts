import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_functional_assertEqualsParametersAsyncCustom_ObjectUnionImplicit =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "ObjectUnionImplicit",
  )(ObjectUnionImplicit)(
    (p: (input: ObjectUnionImplicit) => Promise<ObjectUnionImplicit>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
