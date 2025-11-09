import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_functional_assertEqualsParametersCustom_ObjectGenericUnion =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)(
      "ObjectGenericUnion",
    )(ObjectGenericUnion)(
      (p: (input: ObjectGenericUnion) => ObjectGenericUnion) =>
        typia.functional.assertEqualsParameters(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
