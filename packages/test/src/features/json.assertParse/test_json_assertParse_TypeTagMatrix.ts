import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_json_assertParse_TypeTagMatrix = _test_json_assertParse(
  "TypeTagMatrix",
)<TypeTagMatrix>(TypeTagMatrix)((input) =>
  typia.json.assertParse<TypeTagMatrix>(input),
);
