import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_validate_FunctionalProperty = _test_validate(
  "FunctionalProperty",
)<FunctionalProperty>(FunctionalProperty)((input) =>
  typia.validate<FunctionalProperty>(input),
);
