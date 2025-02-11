import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { SetAlias } from "../../structures/SetAlias";

export const test_createIs_SetAlias = _test_is("SetAlias")<SetAlias>(SetAlias)(
  typia.createIs<SetAlias>(),
);
