import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_functional_assertEqualsFunctionCustom_ObjectGenericUnion =
  (): void =>
    _test_functional_assertEqualsFunction(CustomGuardError)(
      "ObjectGenericUnion",
    )(ObjectGenericUnion)(
      (p: (input: ObjectGenericUnion) => ObjectGenericUnion) =>
        typia.functional.assertEqualsFunction(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
