import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_assertEqualsParametersCustom_ObjectGeneric =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)("ObjectGeneric")(
      ObjectGeneric,
    )((p: (input: ObjectGeneric) => ObjectGeneric) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
