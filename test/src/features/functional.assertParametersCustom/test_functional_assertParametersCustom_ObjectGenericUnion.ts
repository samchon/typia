import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_functional_assertParametersCustom_ObjectGenericUnion =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)("ObjectGenericUnion")(
      ObjectGenericUnion,
    )((p: (input: ObjectGenericUnion) => ObjectGenericUnion) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
