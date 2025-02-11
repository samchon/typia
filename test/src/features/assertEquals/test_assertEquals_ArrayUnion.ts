import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_assertEquals_ArrayUnion = _test_assertEquals(TypeGuardError)(
  "ArrayUnion",
)<ArrayUnion>(ArrayUnion)((input) => typia.assertEquals<ArrayUnion>(input));
