import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_assertGuardCustom_ObjectAlias = (): void =>
  _test_assertGuard(CustomGuardError)("ObjectAlias")<ObjectAlias>(ObjectAlias)(
    (input) =>
      typia.assertGuard<ObjectAlias>(input, (p) => new CustomGuardError(p)),
  );
