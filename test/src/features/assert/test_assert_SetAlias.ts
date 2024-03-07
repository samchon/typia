import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { SetAlias } from "../../structures/SetAlias";

import { TypeGuardError } from "typia";

export const test_assert_SetAlias = _test_assert(TypeGuardError)(
  "SetAlias",
)<SetAlias>(SetAlias)((input) => typia.assert<SetAlias>(input));
