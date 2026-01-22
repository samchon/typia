import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_assertCustom_ArrayRepeatedOptional = (): void =>
  _test_assert(CustomGuardError)(
    "ArrayRepeatedOptional",
  )<ArrayRepeatedOptional>(ArrayRepeatedOptional)((input) =>
    typia.assert<ArrayRepeatedOptional>(input, (p) => new CustomGuardError(p)),
  );
