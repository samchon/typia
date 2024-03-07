import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectSimple } from "../../structures/ObjectSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersAsyncCustom_ObjectSimple =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "ObjectSimple",
  )(ObjectSimple)((p: (input: ObjectSimple) => Promise<ObjectSimple>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
