import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_assertCustom_ToJsonDouble = (): void =>
  _test_assert(CustomGuardError)("ToJsonDouble")<ToJsonDouble>(ToJsonDouble)(
    (input) =>
      typia.assert<ToJsonDouble>(input, (p) => new CustomGuardError(p)),
  );
