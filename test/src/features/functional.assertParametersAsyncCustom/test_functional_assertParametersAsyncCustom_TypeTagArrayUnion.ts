import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_functional_assertParametersAsyncCustom_TypeTagArrayUnion =
  _test_functional_assertParametersAsync(CustomGuardError)("TypeTagArrayUnion")(
    TypeTagArrayUnion,
  )((p: (input: TypeTagArrayUnion) => Promise<TypeTagArrayUnion>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
