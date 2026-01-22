import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_functional_assertReturnCustom_ObjectGenericUnion = (): void =>
  _test_functional_assertReturn(CustomGuardError)("ObjectGenericUnion")(
    ObjectGenericUnion,
  )((p: (input: ObjectGenericUnion) => ObjectGenericUnion) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
