import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_assertCustom_ObjectAlias = (): void =>
  _test_assert(CustomGuardError)("ObjectAlias")<ObjectAlias>(ObjectAlias)(
    (input) => typia.assert<ObjectAlias>(input, (p) => new CustomGuardError(p)),
  );
