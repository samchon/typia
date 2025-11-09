import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_functional_assertEqualsParametersCustom_ObjectUnionImplicit =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)(
      "ObjectUnionImplicit",
    )(ObjectUnionImplicit)(
      (p: (input: ObjectUnionImplicit) => ObjectUnionImplicit) =>
        typia.functional.assertEqualsParameters(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
