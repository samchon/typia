import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_validate_FunctionalObjectUnion = _test_validate(
  "FunctionalObjectUnion",
)<FunctionalObjectUnion>(FunctionalObjectUnion)((input) =>
  typia.validate<FunctionalObjectUnion>(input),
);
