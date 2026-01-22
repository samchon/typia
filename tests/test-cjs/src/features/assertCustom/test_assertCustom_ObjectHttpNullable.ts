import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_assertCustom_ObjectHttpNullable = (): void =>
  _test_assert(CustomGuardError)("ObjectHttpNullable")<ObjectHttpNullable>(
    ObjectHttpNullable,
  )((input) =>
    typia.assert<ObjectHttpNullable>(input, (p) => new CustomGuardError(p)),
  );
