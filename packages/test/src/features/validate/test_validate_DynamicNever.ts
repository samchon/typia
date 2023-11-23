import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_validate_DynamicNever = _test_validate(
  "DynamicNever",
)<DynamicNever>(DynamicNever)((input) => typia.validate<DynamicNever>(input));
