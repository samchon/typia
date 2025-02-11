import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersAsyncCustom_ObjectUnionDouble = _test_functional_assertEqualsParametersAsync(CustomGuardError)(
  "ObjectUnionDouble"
)(ObjectUnionDouble)(
  (p: (input: ObjectUnionDouble) => Promise<ObjectUnionDouble>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)