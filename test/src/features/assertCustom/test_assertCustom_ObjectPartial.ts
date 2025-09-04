import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_assertCustom_ObjectPartial = (): void =>
  _test_assert(CustomGuardError)("ObjectPartial")<ObjectPartial>(ObjectPartial)(
    (input) =>
      typia.assert<ObjectPartial>(input, (p) => new CustomGuardError(p)),
  );
