import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_validate_DynamicTemplate = _test_validate(
  "DynamicTemplate",
)<DynamicTemplate>(DynamicTemplate)((input) =>
  typia.validate<DynamicTemplate>(input),
);
