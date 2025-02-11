import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_createValidate_FunctionalPropertyUnion = _test_validate(
  "FunctionalPropertyUnion",
)<FunctionalPropertyUnion>(FunctionalPropertyUnion)(
  typia.createValidate<FunctionalPropertyUnion>(),
);
