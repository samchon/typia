import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_assertGuardCustom_ObjectGenericUnion = (): void =>
  _test_assertGuard(CustomGuardError)("ObjectGenericUnion")<ObjectGenericUnion>(
    ObjectGenericUnion,
  )((input) =>
    typia.assertGuard<ObjectGenericUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
