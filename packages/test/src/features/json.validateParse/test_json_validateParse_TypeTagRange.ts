import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_json_validateParse_TypeTagRange = _test_json_validateParse(
  "TypeTagRange",
)<TypeTagRange>(TypeTagRange)((input) =>
  typia.json.validateParse<TypeTagRange>(input),
);
