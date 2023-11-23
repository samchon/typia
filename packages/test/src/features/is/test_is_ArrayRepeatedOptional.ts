import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_is_ArrayRepeatedOptional = _test_is(
  "ArrayRepeatedOptional",
)<ArrayRepeatedOptional>(ArrayRepeatedOptional)((input) =>
  typia.is<ArrayRepeatedOptional>(input),
);
