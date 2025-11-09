import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_assertCustom_ObjectPrimitive = (): void =>
  _test_assert(CustomGuardError)("ObjectPrimitive")<ObjectPrimitive>(
    ObjectPrimitive,
  )((input) =>
    typia.assert<ObjectPrimitive>(input, (p) => new CustomGuardError(p)),
  );
