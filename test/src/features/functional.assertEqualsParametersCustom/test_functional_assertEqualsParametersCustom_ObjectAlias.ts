import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_assertEqualsParametersCustom_ObjectAlias =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)("ObjectAlias")(
      ObjectAlias,
    )((p: (input: ObjectAlias) => ObjectAlias) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
