import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_assertEquals_ToJsonUnion = _test_assertEquals(TypeGuardError)(
  "ToJsonUnion",
)<ToJsonUnion>(ToJsonUnion)((input) => typia.assertEquals<ToJsonUnion>(input));
