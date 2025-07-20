import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_assertEqualsParametersCustom_ObjectIntersection =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)(
      "ObjectIntersection",
    )(ObjectIntersection)(
      (p: (input: ObjectIntersection) => ObjectIntersection) =>
        typia.functional.assertEqualsParameters(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
