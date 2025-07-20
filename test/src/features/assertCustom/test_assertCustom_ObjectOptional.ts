import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_assertCustom_ObjectOptional = (): void =>
  _test_assert(CustomGuardError)("ObjectOptional")<ObjectOptional>(
    ObjectOptional,
  )((input) =>
    typia.assert<ObjectOptional>(input, (p) => new CustomGuardError(p)),
  );
