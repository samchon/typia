import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_assertEquals_FunctionalProperty = _test_assertEquals(
  "FunctionalProperty",
)<FunctionalProperty>(FunctionalProperty)((input) =>
  typia.assertEquals<FunctionalProperty>(input),
);
