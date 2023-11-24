import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_equals_DynamicUnion = _test_equals(
  "DynamicUnion",
)<DynamicUnion>(DynamicUnion)((input) => typia.equals<DynamicUnion>(input));
