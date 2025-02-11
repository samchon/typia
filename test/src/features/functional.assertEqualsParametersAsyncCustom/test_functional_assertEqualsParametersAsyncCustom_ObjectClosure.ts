import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_assertEqualsParametersAsyncCustom_ObjectClosure =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "ObjectClosure",
  )(ObjectClosure)((p: (input: ObjectClosure) => Promise<ObjectClosure>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
