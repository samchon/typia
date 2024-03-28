import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_assertEqualsParametersAsyncCustom_ClassClosure =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "ClassClosure",
  )(ClassClosure)((p: (input: ClassClosure) => Promise<ClassClosure>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
