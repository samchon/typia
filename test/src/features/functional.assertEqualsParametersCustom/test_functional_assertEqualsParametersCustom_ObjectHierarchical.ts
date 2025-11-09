import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_assertEqualsParametersCustom_ObjectHierarchical =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)(
      "ObjectHierarchical",
    )(ObjectHierarchical)(
      (p: (input: ObjectHierarchical) => ObjectHierarchical) =>
        typia.functional.assertEqualsParameters(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
