import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_json_assertParse_TypeTagLength = _test_json_assertParse(
  "TypeTagLength",
)<TypeTagLength>(TypeTagLength)((input) =>
  typia.json.assertParse<TypeTagLength>(input),
);
