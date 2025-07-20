import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_assertCustom_TypeTagMatrix = (): void =>
  _test_assert(CustomGuardError)("TypeTagMatrix")<TypeTagMatrix>(TypeTagMatrix)(
    (input) =>
      typia.assert<TypeTagMatrix>(input, (p) => new CustomGuardError(p)),
  );
