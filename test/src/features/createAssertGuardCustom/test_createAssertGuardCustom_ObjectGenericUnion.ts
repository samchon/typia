import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ObjectGenericUnion =
  _test_assertGuard(CustomGuardError)("ObjectGenericUnion")<ObjectGenericUnion>(
    ObjectGenericUnion,
  )(
    typia.createAssertGuard<ObjectGenericUnion>((p) => new CustomGuardError(p)),
  );
