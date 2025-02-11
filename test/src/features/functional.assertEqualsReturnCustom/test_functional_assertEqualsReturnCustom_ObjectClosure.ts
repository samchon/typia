import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_assertEqualsReturnCustom_ObjectClosure =
  _test_functional_assertEqualsReturn(CustomGuardError)("ObjectClosure")(
    ObjectClosure,
  )((p: (input: ObjectClosure) => ObjectClosure) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
