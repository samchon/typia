import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_validateEquals_FunctionalPropertyUnion = _test_validateEquals(
  "FunctionalPropertyUnion",
)<FunctionalPropertyUnion>(FunctionalPropertyUnion)((input) =>
  typia.validateEquals<FunctionalPropertyUnion>(input),
);
