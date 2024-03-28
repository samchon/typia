import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_assertParametersCustom_ObjectOptional =
  _test_functional_assertParameters(CustomGuardError)("ObjectOptional")(
    ObjectOptional,
  )((p: (input: ObjectOptional) => ObjectOptional) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
