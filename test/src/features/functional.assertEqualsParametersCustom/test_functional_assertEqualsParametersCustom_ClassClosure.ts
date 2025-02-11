import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_assertEqualsParametersCustom_ClassClosure =
  _test_functional_assertEqualsParameters(CustomGuardError)("ClassClosure")(
    ClassClosure,
  )((p: (input: ClassClosure) => ClassClosure) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
