import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_assertEquals_FunctionalPropertyUnion = _test_assertEquals(
  "FunctionalPropertyUnion",
)<FunctionalPropertyUnion>(FunctionalPropertyUnion)((input) =>
  typia.assertEquals<FunctionalPropertyUnion>(input),
);
