import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_is_FunctionalPropertyUnion = _test_is(
  "FunctionalPropertyUnion",
)<FunctionalPropertyUnion>(FunctionalPropertyUnion)((input) =>
  typia.is<FunctionalPropertyUnion>(input),
);
