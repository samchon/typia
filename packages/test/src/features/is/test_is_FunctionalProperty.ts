import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_is_FunctionalProperty = _test_is(
  "FunctionalProperty",
)<FunctionalProperty>(FunctionalProperty)((input) =>
  typia.is<FunctionalProperty>(input),
);
