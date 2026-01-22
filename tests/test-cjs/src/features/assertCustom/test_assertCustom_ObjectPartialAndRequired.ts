import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_assertCustom_ObjectPartialAndRequired = (): void =>
  _test_assert(CustomGuardError)(
    "ObjectPartialAndRequired",
  )<ObjectPartialAndRequired>(ObjectPartialAndRequired)((input) =>
    typia.assert<ObjectPartialAndRequired>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
