import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_assertReturnAsyncCustom_ObjectClosure =
  _test_functional_assertReturnAsync(CustomGuardError)("ObjectClosure")(
    ObjectClosure,
  )((p: (input: ObjectClosure) => Promise<ObjectClosure>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
