import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_assertEqualsParametersCustom_ObjectClosure =
  _test_functional_assertEqualsParameters(CustomGuardError)("ObjectClosure")(
    ObjectClosure,
  )((p: (input: ObjectClosure) => ObjectClosure) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
