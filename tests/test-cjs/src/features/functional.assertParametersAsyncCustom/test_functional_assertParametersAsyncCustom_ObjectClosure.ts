import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_assertParametersAsyncCustom_ObjectClosure =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)("ObjectClosure")(
      ObjectClosure,
    )((p: (input: ObjectClosure) => Promise<ObjectClosure>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
