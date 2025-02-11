import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { SetUnion } from "../../structures/SetUnion";

export const test_createIs_SetUnion = _test_is("SetUnion")<SetUnion>(SetUnion)(
  typia.createIs<SetUnion>(),
);
