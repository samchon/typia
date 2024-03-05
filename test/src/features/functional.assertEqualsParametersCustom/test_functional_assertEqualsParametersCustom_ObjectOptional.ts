import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_assertEqualsParametersCustom_ObjectOptional =
  _test_functional_assertEqualsParameters(CustomGuardError)("ObjectOptional")(
    ObjectOptional,
  )((p: (input: ObjectOptional) => ObjectOptional) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
