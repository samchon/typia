import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_validateEquals_FunctionalObjectUnion = _test_validateEquals(
  "FunctionalObjectUnion",
)<FunctionalObjectUnion>(FunctionalObjectUnion)((input) =>
  typia.validateEquals<FunctionalObjectUnion>(input),
);
