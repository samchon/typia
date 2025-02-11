import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_assertReturnCustom_ObjectOptional =
  _test_functional_assertReturn(CustomGuardError)("ObjectOptional")(
    ObjectOptional,
  )((p: (input: ObjectOptional) => ObjectOptional) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
