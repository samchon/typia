import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_assertCustom_ObjectGenericUnion = (): void =>
  _test_assert(CustomGuardError)("ObjectGenericUnion")<ObjectGenericUnion>(
    ObjectGenericUnion,
  )((input) =>
    typia.assert<ObjectGenericUnion>(input, (p) => new CustomGuardError(p)),
  );
