import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_functional_assertEqualsParametersCustom_ObjectHttpNullable =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)(
      "ObjectHttpNullable",
    )(ObjectHttpNullable)(
      (p: (input: ObjectHttpNullable) => ObjectHttpNullable) =>
        typia.functional.assertEqualsParameters(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
