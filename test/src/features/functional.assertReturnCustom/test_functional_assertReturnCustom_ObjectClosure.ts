import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_assertReturnCustom_ObjectClosure =
  _test_functional_assertReturn(CustomGuardError)("ObjectClosure")(
    ObjectClosure,
  )((p: (input: ObjectClosure) => ObjectClosure) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
